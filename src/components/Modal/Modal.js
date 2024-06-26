import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaPlay } from "react-icons/fa";

import './Modal.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:600,
  bgcolor: '#1f222b',
  border: '2px solid ##1f222b',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let title = props.data.param.title;
  let overview = props.data.param.overview;
  let rs = props.data.param.release_date;
  overview = overview ? overview.substring(0,350) + '...' : '';
  if(title === undefined){
    title = props.data.param.name;
  }
  if(rs === undefined){
    rs = props.data.param.first_air_date;
  }
  return (
    <div>
      <button onClick={handleOpen}><FaPlay /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Boxmodel">
        <iframe className='frametag' src={props.url} allow="fullscreen"></iframe>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {overview}
          </Typography>
          <Typography id="rs-date" sx={{ mt: 2 }}>
            {rs}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
