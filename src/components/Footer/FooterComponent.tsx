import { memo } from 'react'

import { Container } from 'react-bootstrap'

import logo from 'assets/spaceMotorsLogo.e488b2c5.png'

import { BackgroundHeader } from './styles'

const Footer: React.FC = () => (
  <BackgroundHeader>
    <Container>
      <div className="d-flex justify-content-center">
        <img src={logo} alt="Logo" className="img-fluid pt-4 pb-3" />
      </div>
      <div className="d-flex justify-content-center pb-4">
        <h6 className="text-secondary">Site por:</h6>
        <h6 className="text-white px-2">Debson Coelho</h6>
      </div>
    </Container>
  </BackgroundHeader>
)

export default memo(Footer)
