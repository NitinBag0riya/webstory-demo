/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Internal dependencies
 */
import TextOutput from '../output';

function renderViaString(...args) {
  // Render an element via string to test that Output templates do not use
  // forbidden dependencies.
  const html = renderToStaticMarkup(...args);
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.firstElementChild;
}

describe('TextOutput', () => {
  it('should return HTML Output based on the params', () => {
    const element = {
      id: '123',
      content: 'Content',
      color: {
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 0.5,
        },
      },
      backgroundColor: {
        color: {
          r: 255,
          g: 0,
          b: 0,
          a: 0.3,
        },
      },
      fontSize: 16,
      letterSpacing: 1.3,
      textAlign: 'left',
      textDecoration: 'none',
      type: 'text',
      x: 10,
      y: 10,
      width: 50,
      height: 50,
      rotationAngle: 0,
      padding: {
        vertical: 0,
        horizontal: 0,
      },
      box: { width: 1080 },
    };

    const output = renderViaString(
      <TextOutput
        element={element}
        box={{ width: 1080, height: 1920, x: 50, y: 100, rotationAngle: 0 }}
      />
    );
    expect(output.tagName).toBe('P');
    expect(output.innerHTML).toBe('Content');
    expect(output.className).toBe('fill');
    expect(output.style.whiteSpace).toBe('pre-wrap');
    expect(output.style.padding).toBe('0% 0%');
    expect(output.style.margin).toBe('0px');
    expect(output.style.color).toBe('rgba(255, 255, 255, 0.5)');
    expect(output.style.backgroundColor).toBe('rgba(255, 0, 0, 0.3)');
    expect(output.style.fontSize).toBe('0.83333%');
    expect(output.style.letterSpacing).toBe('1.3em');
    expect(output.style.textAlign).toBe('left');
    expect(output.style.textDecoration).toBe('none');
  });

  it('should apply <strong> tags if bold', () => {
    const element = {
      id: '123',
      content: 'Content',
      color: {
        color: {
          r: 255,
          g: 255,
          b: 255,
          a: 0.5,
        },
      },
      backgroundColor: {
        color: {
          r: 255,
          g: 0,
          b: 0,
          a: 0.3,
        },
      },
      fontSize: 16,
      letterSpacing: 1.3,
      textAlign: 'left',
      textDecoration: 'none',
      type: 'text',
      x: 10,
      y: 10,
      width: 50,
      height: 50,
      rotationAngle: 0,
      padding: {
        vertical: 0,
        horizontal: 0,
      },
      bold: true,
    };

    const output = renderViaString(
      <TextOutput
        element={element}
        box={{ width: 1080, height: 1920, x: 50, y: 100, rotationAngle: 0 }}
      />
    );
    expect(output.innerHTML).toBe('<strong>Content</strong>');
  });

  it('should produce valid AMP output', async () => {
    const props = {
      element: {
        type: 'text',
        id: '123',
        x: 50,
        y: 100,
        height: 1920,
        width: 1080,
        rotationAngle: 0,
        content: 'Hello World',
        color: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
        padding: {
          horizontal: 0,
          vertical: 0,
        },
      },
      box: { width: 1080, height: 1920, x: 50, y: 100, rotationAngle: 0 },
    };

    await expect(<TextOutput {...props} />).toBeValidAMPStoryElement();
  });
});
