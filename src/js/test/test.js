import Field from '../Field';
import Character from '../Character';

test('проверка создания поля', () => {
  const field = new Field();
  const genField = field.viewField(4);
  const received = genField.querySelectorAll('.field_block');
  expect(received.length).toBe(4 ** 2);
});

test('проверка генерации персонажа', () => {
  const char = new Character();
  const genChar = char.viewChar();
  const received = genChar.classList.contains('char');
  expect(received).toBeTruthy();
});