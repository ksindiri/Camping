/**
 * Guys Gang Camping Trip — Auto Form Generator
 *
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Click "New project"
 * 3. Delete any existing code in the editor
 * 4. Paste this entire script
 * 5. Click the 💾 Save icon
 * 6. Click ▶ Run (select "createCampingForm" if prompted)
 * 7. Accept permissions when asked
 * 8. When done, check "Execution log" at the bottom for your form URL
 */

function createCampingForm() {

  // ── Create the form ──────────────────────────────────────────────────────
  var form = FormApp.create('🏕️ Guys Gang Camping Trip — Inventory Check-in');

  form.setDescription(
    "Hey legend! Takes 3 minutes. Fill this in by Thursday 11 June, 9 PM so we can " +
    "confirm who's bringing what before Saturday. No form = no food assignments = chaos. " +
    "Don't be that guy 😄"
  );

  form.setConfirmationMessage("You're a legend. See you Saturday! 🏕️🔥");
  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false); // set true if you want to restrict to 1 per Google account
  form.setCollectEmail(true);
  form.setPublishingSummary(false);

  // ── Q1: Name ─────────────────────────────────────────────────────────────
  form.addTextItem()
    .setTitle('Your name (first name is fine)')
    .setRequired(true);

  // ── Q2: WhatsApp ─────────────────────────────────────────────────────────
  form.addTextItem()
    .setTitle('WhatsApp number (so we can tag you in the action summary on Saturday morning)')
    .setHelpText('e.g. +46 70 123 4567')
    .setRequired(true);

  // ── Q3: Dietary restrictions ──────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Any dietary restrictions or allergies? (Select all that apply)')
    .setChoiceValues([
      'None — I eat everything 🍗',
      'Vegetarian',
      'Vegan',
      'Halal only',
      'No pork',
      'Nut allergy',
      'Gluten-free',
      'Lactose intolerant'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // ── Q4: Tent ──────────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('Do you have a tent you can bring?')
    .setChoiceValues([
      '✅ Yes — bringing my own tent',
      '👥 Yes — happy to share (has room for others)',
      '❌ No — need to fit in someone else\'s tent',
      '🤔 Not sure yet'
    ])
    .setRequired(true);

  // ── Q5: Tent capacity ─────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('If you\'re bringing a tent — how many people does it fit?')
    .setHelpText('Leave blank if not bringing a tent.')
    .setChoiceValues(['1', '2', '3', '4', '5+'])
    .setRequired(false);

  // ── Q6: Sleep gear ────────────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('What sleep gear are you bringing? (tick all you have)')
    .setChoiceValues([
      'Sleeping bag',
      'Sleeping mat / foam pad',
      'Pillow',
      'None of the above — need to borrow'
    ])
    .setRequired(true);

  // ── Q7: Cooking equipment ─────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Cooking / camp gear you own and can bring — tick everything available:')
    .setChoiceValues([
      'Large pot (10L+)',
      'Frying pan / skillet',
      'Portable gas stove (with gas)',
      'BBQ grill (portable or tabletop)',
      'Charcoal (bag)',
      'BBQ tongs',
      'Cutting board + knife',
      'Ladle / serving spoons',
      'Kettle (camp or regular)',
      'Can opener',
      'Folding table',
      'Folding camp chairs (specify quantity in next question)'
    ])
    .setRequired(false);

  // ── Q8: Camp chairs count ─────────────────────────────────────────────────
  form.addListItem()
    .setTitle('How many folding camp chairs can you bring?')
    .setChoiceValues(['0', '1', '2', '3', '4', '5+'])
    .setRequired(true);

  // ── Q9: Entertainment ─────────────────────────────────────────────────────
  form.addCheckboxItem()
    .setTitle('Any of these can you bring? (bonus points 🎉)')
    .setChoiceValues([
      'Bluetooth speaker',
      'Football',
      'Frisbee',
      'Hammock',
      'Card games / board games',
      'Badminton / outdoor game set',
      'String lights / solar lantern',
      'Power bank (large)',
      'None of the above'
    ])
    .setRequired(false);

  // ── Q10: Transport ────────────────────────────────────────────────────────
  form.addMultipleChoiceItem()
    .setTitle('Transport situation?')
    .setChoiceValues([
      '🚗 Driving — can take passengers (specify how many below)',
      '🙋 Need a ride',
      '🚌 Sorting my own transport'
    ])
    .setRequired(true);

  // ── Q11: Passenger capacity ───────────────────────────────────────────────
  form.addListItem()
    .setTitle('If you\'re driving — how many passengers can you fit (excluding yourself)?')
    .setHelpText('Leave as 0 if you\'re not driving.')
    .setChoiceValues(['0', '1', '2', '3', '4'])
    .setRequired(false);

  // ── Q12: Anything else ────────────────────────────────────────────────────
  form.addParagraphTextItem()
    .setTitle('Anything else we should know?')
    .setHelpText('Medical needs, arriving late, leaving early, etc.')
    .setRequired(false);

  // ── Done — log the URLs ───────────────────────────────────────────────────
  Logger.log('✅ Form created successfully!');
  Logger.log('📋 Edit URL (share with co-organisers): ' + form.getEditUrl());
  Logger.log('🔗 Public response URL (share with the gang): ' + form.getPublishedUrl());
  Logger.log('📊 Responses spreadsheet: open the form → Responses tab → Sheets icon');
}
