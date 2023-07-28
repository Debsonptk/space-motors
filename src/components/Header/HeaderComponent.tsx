import { memo } from 'react'

import { Container } from 'react-bootstrap'

import logo from 'assets/spaceMotorsLogo.e488b2c5.png'
import banner from 'assets/spaceMotorsPicture.5a19d854.png'

import { BackgroundHeader } from './styles'

const Header: React.FC = () => (
  <BackgroundHeader>
    <Container>
      <img src={logo} alt="Logo" className="img-fluid pt-3 pb-3" />
    </Container>
    <div>
      <img src={banner} alt="Banner" className="img-fluid" />
    </div>
  </BackgroundHeader>
)

export default memo(Header)
