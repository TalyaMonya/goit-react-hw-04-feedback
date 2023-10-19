
import { Container } from "./MainWrapper.styled";


export const MainWrapper = ({ children }) => {
    return (
        <Container>
            <main>{children}</main>
        </Container>
    );
};