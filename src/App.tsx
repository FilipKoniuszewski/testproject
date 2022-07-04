import React from "react";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import RegisterModal from "./Components/RegisterModal.tsx";
// @ts-ignore
import Button from "./Components/Button.tsx";
import "./Styles/App.scss";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      modalRef?.current?.classList.add("register-modal-active");
    } else {
      modalRef?.current?.classList.remove("register-modal-active");
    
    }
  }, [isModalOpen]);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="App">
      <div
        data-testid="wrapper"
        className={`wrapper ${isModalOpen && "bg-modal-open"}`}
      >
        <Button
          isModalOpen={isModalOpen}
          size="md"
          clickEvent={() => setIsModalOpen(true)}
          className="open-modal-button"
          content={isModalOpen ? "You clicked me!" : "Click me!"}
        />
      </div>
      <RegisterModal
        accent="hsl(356, 100%, 66%)"
        ref={modalRef}
        clickEvent={() => setIsModalOpen(false)}
        header="Account not created"
        paragraph="Looks like you already have an account with easyJet.
                    If this is you please login to access your account,
                    or otherwise please choose an alternative email address."
      />
    </div>
  );
}

export default App;
