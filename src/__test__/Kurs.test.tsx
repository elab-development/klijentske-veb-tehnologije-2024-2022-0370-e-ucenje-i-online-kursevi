import { render, screen } from '@testing-library/react';
import Kurs from '../../components/Kurs'; 

test('renders "Kupi kurs" button', () => {
  // Mock props
  const mockProps = {
    naziv: 'Naziv kursa',
    opis: 'Opis kursa',
    cena: 100,
    onKupi: jest.fn(), // Mock funkcija za onKupi() prop
  };

  render(<Kurs {...mockProps} />);


  const buttonElement = screen.getByRole('button', { name: 'Kupi kurs' });
  expect(buttonElement).toBeInTheDocument();
});
