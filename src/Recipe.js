import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './recipe.css'

function Recipe(props) {
    return (
        <div className="recipe">
            
             <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            <img src="https://picsum.photos/200/300/?blur"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title={props.name}
        
      />
      <CardMedia
      style = {{ height: 0, paddingTop: '56%'}}
      image= {props.image}
      />
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
       <ol>
         {props.ingredients.map(ingredient=>(
           <li>{ingredient.text}</li>
         ))}
       </ol>
        </Typography>
      </CardContent>
     </Card>
     </div>
    )
}

export default Recipe
