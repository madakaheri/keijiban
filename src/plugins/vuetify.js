import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

/* Optional italic styles */
import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900-italic.css';
import 'vuetify/styles';
// Material Design Icons (webfont)
import '@mdi/font/css/materialdesignicons.css';
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {mdi} from 'vuetify/iconsets/mdi';

export const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
		sets: {mdi},
	},
	theme: {
		defaultTheme: 'dark',
	},
});
