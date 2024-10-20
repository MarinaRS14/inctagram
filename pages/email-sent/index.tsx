import React, { useState } from 'react';

import { CloseDialog, DEPRECATED_Modal } from '@/features/DEPRECATED_Modal';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/typography';
import { HeadMeta } from '@/widgets/HeadMeta/HeadMeta';
import { getLayout } from '@/widgets/Layout/Layout';
import { Trans } from '@/widgets/Trans/Trans';

const EmailSent = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('someEmail');

  function handleModalClosed() {
    setOpen(false);
  }

  return (
    <>
      <HeadMeta title={'Email Sent'} />
      <DEPRECATED_Modal
        onClose={handleModalClosed}
        open={open}
        showCloseButton
        title={'Email sent'}
      >
        <Typography.Regular16>
          <Trans
            tags={{
              '1': () => <b>{`${email}`}</b>,
            }}
            text={`We have sent a link to confirm your email to "${email}?"`}
          />
        </Typography.Regular16>
        <div style={{ display: 'flex', justifyContent: 'right', marginTop: 25 }}>
          <CloseDialog asChild>
            <div style={{ display: 'flex' }}>
              <Button style={{ width: '96px' }}>Yes</Button>
            </div>
          </CloseDialog>
        </div>
      </DEPRECATED_Modal>
    </>
  );
};

EmailSent.getLayout = getLayout;
export default EmailSent;
