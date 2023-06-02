
import { makeStyles } from "@material-ui/core/styles";



export default makeStyles(() => ({
    appBar: {
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
    },
    heading: {
        padding: '10px',
        background: 'inherit',
        borderRadius: '15px',
    },
    root: {
        padding: '20px',
    },
    form: {
        borderRadius: '15px',
        padding: '4px',
        marginBottom: '6px',
        background: 'inherit',
        color: 'white'
    }
}))
