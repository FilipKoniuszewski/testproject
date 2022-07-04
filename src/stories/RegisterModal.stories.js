import RegisterModal from "../Components/RegisterModal"

export default {
    title: "Components/Modal",
    component: RegisterModal,
    argTypes: {
        clickEvent : {
            action: "clickEvent"
        },
        accent: {
            control: 'color'
        },
    }
    
}

const Template = args => <RegisterModal {...args} />

export const Modal = Template.bind({})

Modal.args = {
    header: "Account not created", 
    paragraph: "Looks like you already " +
        "have an account with easyJet.If this is you please login to " +
        "access your account,or otherwise please choose an alternative " +
        "email address.",
    accent: 'hsl(356, 100%, 66%)'
}
