global.fetch = require('node-fetch');
import React from 'react';

import { render, screen, waitFor } from'@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearch from './NewsSearch';

describe('NewsSearch Componenet', () => {
    it('it displays news', () => {
        render(<NewsSearch />)
        const ul = screen.getByText('Loading');
        return waitFor(() => {
            expect(ul).not.toBeEmptyDOMElement();
        });
    });
});