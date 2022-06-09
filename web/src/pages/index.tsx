import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    petsList
  } = useIndex()
  
  return (
    <div>
      <Title
        title=""
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong> adotar um pet virtualmente</strong>
          </span>
        } />

        <List 
          pets={petsList}
        />

        <Dialog
          open={false}
          fullWidth  
          PaperProps={{ sx: { p: 5 } }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField type={'email'} label={'E-mail'} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField type={'number'} label={'Quantia por mês'} fullWidth />
            </Grid>
          </Grid>
          <DialogActions sx={{ mt: 5 }}>
            <Button color={'secondary'}>
              Cancelar
            </Button>
            <Button variant={'contained'}>
              Confirmar adoção
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar 
          open={false}
          message={'sdfjkhs gjshjkg dfgsdg gdg'}
        />
    </div>
  )
}

export default Home
