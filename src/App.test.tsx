import { useLayoutEffect, useRef } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// This is a workaround for a known issue when using Clarity with React Testing Library.
// See https://github.com/vmware-archive/clarity/issues/5985.
// The test will not show an error if this block is uncommented.

// vi.mock('@cds/react/select', () => ({
//   CdsSelect: (props: PropsWithChildren<ComponentProps<typeof CdsSelect>>) => {
//     const ref = useRef<HTMLDivElement>(null);

//     useLayoutEffect(() => {
//       const id = `id-${Math.trunc(Math.random() * 1000)}`;
//       ref.current?.querySelector('select')?.setAttribute('id', id);
//       ref.current?.querySelector('label')?.setAttribute('for', id);
//     }, []);

//     return <div ref={ref} {...(props as unknown)} />;
//   },
// }));

describe('Form test', () => {
    test('check select field', async() => {
        render(<App />);
        expect(await screen.findByText('Field')).toBeInTheDocument();
    });
});
