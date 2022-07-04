import React from "react";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import Button, { Size } from "./Components/Button.tsx";
// @ts-ignore
import RegisterModal from "./Components/RegisterModal.tsx";
import "./Styles/App.scss";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClose = (): void => {
    setIsModalOpen(false);
  };

  const onOpen = (): void => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <div
        data-testid="wrapper"
        className='wrapper'
      >
        <Button
          size={Size.small}
          onOpen={onOpen}
          className="open-modal-button"
          content={isModalOpen ? "You clicked me!" : "Click me!"}
        />
      </div>
      <RegisterModal
        isModalVisible={isModalOpen}
        onClose={onClose}
        accent="hsl(356, 100%, 66%)"
        header="Account not created"
        paragraph="Looks like you already have an account with easyJet.
                    If this is you please login to access your account,
                    or otherwise please choose an alternative email address."
      />
    </div>
  );
};

export default App;
