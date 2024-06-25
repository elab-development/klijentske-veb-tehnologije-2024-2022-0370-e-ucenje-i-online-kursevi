import { render, screen } from '@testing-library/react';

import Kurs from '../../components/Kurs'; // Adjust path as per your project structure
=======
import Kurs from '../../components/Kurs'; 


test('renders "Kupi kurs" button', () => {
  // Mock props
  const mockProps = {
    naziv: 'Naziv kursa',
    opis: 'Opis kursa',
    cena: 100,

    onKupi: jest.fn(), // Mock function for onKupi prop
=======
    onKupi: jest.fn(), // Mock funkcija za onKupi() prop

  };

  render(<Kurs {...mockProps} />);


  // Check if the button "Kupi kurs" is present in the rendered component
=======


  const buttonElement = screen.getByRole('button', { name: 'Kupi kurs' });
  expect(buttonElement).toBeInTheDocument();
});
