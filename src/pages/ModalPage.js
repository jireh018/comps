import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showMoal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showMoal && modal}
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
      <p>
        djqwebuwebfuwebfujnbwei jfhuwerjiv nerjivnierunhgv iukje ierijnrirne
        ijgerngoi nergio nerionerbetrbneoibnoioiertfnbijoerntfiojn ijghion
        ioertnkioertnoig erniogu oenbjiednfbij nej eijkklernioernhglknert
      </p>
    </div>
  );
}

export default ModalPage;
