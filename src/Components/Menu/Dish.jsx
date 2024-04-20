import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import { useState } from "react";


export default function Dish({title, image, description}) {
  const [heart,setHeart] = useState(false);
  const handelChange = ()=>{
    setHeart((state)=>!state)
  }
  return (
    <Card style={{background:"orange"}}>
      <CardHeader
        title={title}
      />
      <CardMedia component="img" style={{height:"230px"}} image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" style={{overflowY:"auto",height:"150px",color:"white", textAlign: "justify", padding:"5px" }}>
         {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{display: "flex",justifyContent:"space-between" ,padding:"0.5rem 2rem"}}>
        <IconButton aria-label="add to favorites" onClick={handelChange}>
          <FavoriteIcon className={heart ?  "color-red" :"color-white"} />
        </IconButton>
        <IconButton aria-label="share" style={{color:"white"}}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Dish.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string
}
