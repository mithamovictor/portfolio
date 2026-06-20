import { FC } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';

const BuyMeACoffeeButton: FC = () => (
  <Button
    component="a"
    href="https://www.buymeacoffee.com/vmithamo"
    target="_blank"
    rel="noopener noreferrer"
    variant="outlined"
    color="primary"
    startIcon={<Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="" width={20} height={20} />}
    sx={{ mb: 2 }}
  >
    Buy me a coffee
  </Button>
);

export default BuyMeACoffeeButton;
