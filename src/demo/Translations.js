import React from 'react';

import { withTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Translations({ t, i18n, styles }) {
  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">Translations</Typography>
        <Typography component="span">{t('demo.helloWorld')}</Typography>
        <Typography component="span">{t('demo.phrase')}</Typography>
        <CardActions>
          <Button size="small" variant="contained" color="secondary" onClick={() => i18n.changeLanguage('en')}>EN</Button>
          <Button size="small" variant="contained" color="secondary" onClick={() => i18n.changeLanguage('es')}>ES</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default withTranslation()(Translations);
