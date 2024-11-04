import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          <GoBell />
          Let's go!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Bonjour!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Hola!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Mbote!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Arigato!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
