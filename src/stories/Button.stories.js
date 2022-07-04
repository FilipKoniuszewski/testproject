import Button from "../Components/Button";
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

export default {
    title: "Components/Button",
    component: Button,
    argTypes: { 
        clickEvent : {
            action: true
        },
        size: {
            control: "select",
        },
    }
}

const Template = args => <Button {...args} />

export const Open = Template.bind({})

export const Opened = Template.bind({})

export const Close = Template.bind({})

Open.args = {
    content: 'Click me!',
    size: 'sm',
    className: 'open-modal-button',
}

Opened.args = {
    content: 'You clicked me!',
    size: 'md',
    className: 'open-modal-button',
}

Close.args = {
    content: 'Close',
    size: 'lg',
    className: 'open-modal-button',
}


export const Demo = {
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('button'));
        await expect(args.clickEvent).toHaveBeenCalled();
    },
};

