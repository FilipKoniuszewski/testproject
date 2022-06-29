import {useEffect, useRef, useState} from "react";
import RegisterModal from "./Components/RegisterModal";
import Button from "./Components/Button";
import "./Styles/App.scss"

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const modalRef = useRef(null)

    useEffect(() => {
        if (isModalOpen) {
            modalRef.current.classList.add('register-modal-active')
        }
        else {
            modalRef.current.classList.remove('register-modal-active')
        }

    }, [isModalOpen])

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isModalOpen && modalRef.current && !modalRef.current.contains(e.target)) {
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
            <div className={`wrapper ${isModalOpen && 'bg-modal-open'}`}>
                {isModalOpen ?
                    <Button
                        clickEvent={() => setIsModalOpen(true)}
                        content="You clicked me!"
                        className="open-modal-button opened"/>
                    :
                    <Button
                        clickEvent={() => setIsModalOpen(true)}
                        content="Click me!"
                        className="open-modal-button"/> }
            </div>
            <RegisterModal
                modalRef={modalRef}
                isModalOpen={isModalOpen}
                clickEvent={() => setIsModalOpen(false)}
            />
        </div>
  );
}

export default App;
