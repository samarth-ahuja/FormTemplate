import {Container} from '@mui/material';
import FormTemplate from '../components/FormTemplate';
import {CssBaseline} from '@mui/material';

export default function FormPage(){
    return (
        <>
        <CssBaseline/>
        <Container>
            <FormTemplate></FormTemplate>
        </Container>
        </>
    );
}