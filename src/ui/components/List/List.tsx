import { Button } from '@mui/material'
import{
    ListStyled,
    ListItem,
    Picture,
    Info,
    Name,
    Description
} from './List.style'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListProps{
    pets: Pet[];
}

export default function List(props: ListProps){
    const maxTextSize = 200;

    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ListItem key={pet.id} >
                    <Picture src={pet.picture} alt={pet.name} />
                    <Info>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.limitText(pet.description, maxTextSize)}
                        </Description>
                        <Button
                            variant={'contained'}    
                            fullWidth
                        >Adotar {pet.name}</Button>
                    </Info>
                </ListItem>
            ))}
            
        </ListStyled>
    )
}