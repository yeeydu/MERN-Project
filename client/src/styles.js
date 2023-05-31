import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";



export default makeStyles(() => ({
    appBar: {
        borderRadius: '15',
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        padding: '10px',
        background: 'inherit',
        borderRadius: '15',
    }
}))
