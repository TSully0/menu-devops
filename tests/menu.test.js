import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('menu-data.json contiene productos válidos sin precios negativos', () => {
  const raw = readFileSync(new URL('../menu-data.json', import.meta.url), 'utf8');
  const data = JSON.parse(raw);

  assert.ok(data && typeof data === 'object');
  assert.ok(Array.isArray(data.products) && data.products.length > 0);

  for (const product of data.products) {
    assert.equal(typeof product.price, 'number', `Precio inválido en ${product.name}`);
    assert.ok(
      Number.isFinite(product.price) && product.price >= 0,
      `Precio negativo o no válido en ${product.name}`
    );
  }
});
