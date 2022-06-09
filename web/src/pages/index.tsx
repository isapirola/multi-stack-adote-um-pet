import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useState } from 'react'

const Home: NextPage = () => {
  
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
          pets={[
            {
              id: 1,
              name: 'Ramon',
              description: 'dfgsrdg ksdjkgsd hgsdhgksd gsdgjkhsdhjkgs sdfhdfjklhdfh hd fj dfgj dfh dfh',
              picture: 'https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png'
            },
            {
              id: 2,
              name: 'Romilda',
              description: 'dfgsrdg ksdjkgsd cucucucucu sdfgdrfhdf maravilhosaaaaa hhgsdhgksd gsdgjkhsdhjkgs sdfhdfjklhdfh hd fj dfgj dfh dfh',
              picture: 'https://blog.cobasi.com.br/wp-content/uploads/2021/09/cachorro-pelado-capa.png'
            }
          ]}
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
