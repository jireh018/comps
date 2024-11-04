import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'lk23',
      label: 'Can I use Next on a project?',
      content: 'You can use it any project u have, my friend.',
    },
    {
      id: 'jgd993',
      label: 'Can I use React on a project?',
      content: 'You can use it any project u have, my friend.',
    },
    {
      id: 'dhdi334',
      label: 'Can I use Node on a project?',
      content: 'You can use it any project u have, my friend.',
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
