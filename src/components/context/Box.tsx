import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const Box = () => {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>
            <div style={{ backgroundColor: theme.secondary.main, color: theme.secondary.text }}>Theme Context1</div>
        </div>
    )
}