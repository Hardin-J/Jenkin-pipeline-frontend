import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage'
import Renderer from 'react-test-renderer'


describe('Login Page test suite', () => {
    test('renders Username input', () => {
        render(<LoginPage />);
        const linkElement = screen.getByTestId("username");
        expect(linkElement).toBeInTheDocument();
    });
    
    test('renders Password input', () => {
        render(<LoginPage />);
        const linkElement = screen.getByTestId("password");
        expect(linkElement).toBeInTheDocument();
    });

    test('renders Submit button', () => {
        render(<LoginPage />);
        const linkElement = screen.getByTestId("login-submit");
        expect(linkElement).toBeInTheDocument();
    })

    test('renders check box', () => {
        render(<LoginPage />);
        const linkElement = screen.getByTestId("checked");
        expect(linkElement).toBeInTheDocument();
    })
})

test('Snapshot',()=>{
    render(<LoginPage/>);
    const comp = Renderer.create(<LoginPage/>);
    const tree = comp.toJSON;
    expect(tree).toMatchSnapshot();
})

