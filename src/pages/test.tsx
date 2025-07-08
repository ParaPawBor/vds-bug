import { Container, Stack } from '@vds/components';

import styles from './test.module.scss';

export default function TestPage() {
    return (
        <div>
            <Stack className={styles.box}>invalid stack</Stack>
            <br />
            <Container className={styles.box}>invalid container</Container>
            <br />
            <div className={styles.box}>valid</div>
        </div>
    );
}
