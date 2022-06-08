import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'

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

        <List pets={[
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
        ]}/>
    </div>
  )
}

export default Home
