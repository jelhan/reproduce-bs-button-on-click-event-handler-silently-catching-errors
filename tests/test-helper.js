import Application from 'reproduce-bs-button-on-click-event-handler-silently-catching-errors/app';
import config from 'reproduce-bs-button-on-click-event-handler-silently-catching-errors/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
