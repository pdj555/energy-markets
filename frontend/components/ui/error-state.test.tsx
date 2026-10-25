import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ErrorState } from '@/components/ui/error-state';

describe('ErrorState', () => {
  it('renders the connection failure message for the market API', () => {
    render(<ErrorState />);

    expect(screen.getByRole('heading', { name: 'Connection failed' })).toBeInTheDocument();
    expect(
      screen.getByText(/Unable to reach the market API\. Verify the backend is running on port 8080\./)
    ).toBeInTheDocument();
  });

  it('does not render a retry button when no retry handler is given', () => {
    render(<ErrorState />);

    expect(screen.queryByRole('button', { name: 'Retry' })).not.toBeInTheDocument();
  });

  it('renders a retry button and calls the handler when one is given', () => {
    const onRetry = vi.fn();
    render(<ErrorState onRetry={onRetry} />);

    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
