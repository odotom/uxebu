import assert from 'assert';
import React from 'react/addons';
import Page from '../src/components/Page.js';
import KataGroups from '../src/katagroups.js';
import {default as KataGroupsComponent} from '../src/components/KataGroups';
import {default as KatasComponent} from '../src/components/KataItems';
import {hasChildOfType} from './_customasserts.js';

assert.hasChildOfType = hasChildOfType;

describe('kata groups component', function() {

  it('receives a KataGroup instance', function() {
    let rawData = {'group name': {items: []}};
    let kataGroups = KataGroups.fromRawKataData(rawData);
    assert.hasChildOfType(<Page groups={kataGroups} />, KataGroupsComponent);
  });

  it('receives a Katas instance', function() {
    let rawData = {'group name': {items: []}};
    let kataGroups = KataGroups.fromRawKataData(rawData);
    assert.hasChildOfType(<Page groups={kataGroups} />, KatasComponent);
  });

  it('', function () {

  })
});