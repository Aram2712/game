
import { Modal, Backdrop, Box, Slide } from '@mui/material';
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from '../context';
import { Link } from 'react-scroll'
import './component.scss'

const style = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: "100%",
    bgcolor: 'black',
    fontFamily: 'Poppins, sans-serif',
    //   borderRadius: '10px',
    p: 2,
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-end',
    border: 'none',
    outline: 'none'
};

function MobileMenu(props) {

    const { openMobileMenu, setOpenMobileMenu } = props;

    const { headerData } = useGlobalContext();

    const close = () => setOpenMobileMenu(false)

    return (
        <Modal
            open={openMobileMenu}
            onClose={close}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Slide in={openMobileMenu}>
                <Box sx={style}>
                    <IoMdClose
                        style={{
                            color: 'white',
                            fontSize: '32px',
                            margin: '10px'
                        }}
                        onClick={close}
                    />
                    {
                        headerData.map((item) => (
                            <Link
                                to={item.link}
                                smooth={true}
                                duration={500}
                                className='navigationItem mobileMenuItem'
                                onClick={close}
                            >
                                {item.title}
                            </Link>
                        ))
                    }
                    <span className='navigationItem mobileMenuItem'>Login</span>
                </Box>
            </Slide>
        </Modal>
    )
}

export default MobileMenu