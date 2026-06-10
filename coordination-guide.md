# 📋 Guys Gang Camping — Google Forms Coordination Guide

*Full setup guide: form → sheet → messages → dashboard. Target: <30 min to deploy.*

---

## Deliverable 1: Google Form Setup Guide

### Step 1 — Create the Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click **Blank form**
3. Title: `🏕️ Guys Gang Camping Trip — Inventory Check-in`
4. Description (copy-paste):
   ```
   Hey legend! Takes 3 minutes. Fill this in by Thursday 11 June, 9 PM so we can 
   confirm who's bringing what before Saturday. No form = no food assignments = chaos. 
   Don't be that guy 😄
   ```

---

### Step 2 — Form Settings (do this BEFORE adding questions)

Click the ⚙️ **Settings** tab at the top:

| Setting | Value |
|---------|-------|
| Collect email addresses | ✅ ON (so we know who submitted) |
| Send responders a copy | ✅ ON |
| Allow response editing | ✅ ON (people can update) |
| Limit to 1 response | ✅ ON |
| Confirmation message | `You're a legend. See you Saturday! 🏕️🔥` |
| Require sign-in | ❌ OFF (no Google account needed) |

> ⚠️ **Note on "no authentication":** Set "Collect email addresses" to **Responder input** — this asks for their email without forcing Google sign-in. Mobile-friendly and low friction.

---

### Step 3 — Questions (exact copy-paste text)

---

#### Q1 — Your Name
- **Type**: Short answer
- **Question text**:
  ```
  Your name (first name is fine)
  ```
- **Required**: ✅ Yes
- **Validation**: None (keep it simple)

---

#### Q2 — What's your WhatsApp number?
- **Type**: Short answer
- **Question text**:
  ```
  WhatsApp number (so we can tag you in the action summary on Saturday morning)
  ```
- **Required**: ✅ Yes
- **Placeholder text**: `+46 70 123 4567`

---

#### Q3 — Dietary restrictions / allergies
- **Type**: Checkboxes
- **Question text**:
  ```
  Any dietary restrictions or allergies? (Select all that apply)
  ```
- **Options**:
  - None — I eat everything 🍗
  - Vegetarian
  - Vegan
  - Halal only
  - No pork
  - Nut allergy
  - Gluten-free
  - Lactose intolerant
  - Other (please specify below)
- **Required**: ✅ Yes
- **"Other" option**: ✅ Enable "Add 'Other'"

---

#### Q4 — Do you have a tent?
- **Type**: Multiple choice (radio)
- **Question text**:
  ```
  Do you have a tent you can bring?
  ```
- **Options**:
  - ✅ Yes — bringing my own tent
  - 👥 Yes — happy to share (has room for others)
  - ❌ No — need to fit in someone else's tent
  - 🤔 Not sure yet
- **Required**: ✅ Yes

---

#### Q5 — Tent capacity (conditional)
- **Type**: Multiple choice
- **Question text**:
  ```
  If you're bringing a tent — how many people does it fit?
  ```
- **Options**: 1, 2, 3, 4, 5+
- **Required**: ❌ No (leave blank if not bringing one)

---

#### Q6 — Sleeping bag & mat
- **Type**: Checkboxes
- **Question text**:
  ```
  What sleep gear are you bringing? (tick all you have)
  ```
- **Options**:
  - Sleeping bag
  - Sleeping mat / foam pad
  - Pillow
  - None of the above — need to borrow
- **Required**: ✅ Yes

---

#### Q7 — Cooking & prep equipment you own and can bring
- **Type**: Checkboxes
- **Question text**:
  ```
  Cooking / camp gear you own and can bring — tick everything you have available:
  ```
- **Options**:
  - Large pot (10L+)
  - Frying pan / skillet
  - Portable gas stove (with gas)
  - BBQ grill (portable or tabletop)
  - Charcoal (bag)
  - BBQ tongs
  - Cutting board + knife
  - Ladle / serving spoons
  - Kettle (camp or regular)
  - Can opener
  - Folding table
  - Folding camp chairs (specify quantity below)
- **Required**: ❌ No (just tick what you have)

---

#### Q8 — How many camp chairs can you bring?
- **Type**: Dropdown
- **Question text**:
  ```
  How many folding camp chairs can you bring?
  ```
- **Options**: 0, 1, 2, 3, 4, 5+
- **Required**: ✅ Yes

---

#### Q9 — Entertainment & extras
- **Type**: Checkboxes
- **Question text**:
  ```
  Any of these can you bring? (bonus points 🎉)
  ```
- **Options**:
  - Bluetooth speaker
  - Football
  - Frisbee
  - Hammock
  - Card games / board games
  - Badminton / outdoor game set
  - String lights / solar lantern
  - Power bank (large)
  - None of the above
- **Required**: ❌ No

---

#### Q10 — Are you driving / can you take passengers?
- **Type**: Multiple choice
- **Question text**:
  ```
  Transport situation?
  ```
- **Options**:
  - 🚗 Driving — can take passengers (specify how many below)
  - 🙋 Need a ride
  - 🚌 Sorting my own transport
- **Required**: ✅ Yes

---

#### Q11 — Passenger capacity
- **Type**: Dropdown
- **Question text**:
  ```
  If you're driving — how many passengers can you fit (excluding yourself)?
  ```
- **Options**: 0, 1, 2, 3, 4
- **Required**: ❌ No

---

#### Q12 — Anything else to flag?
- **Type**: Paragraph (long text)
- **Question text**:
  ```
  Anything else we should know? Medical needs, arriving late, leaving early, etc.
  ```
- **Required**: ❌ No

---

### Step 4 — Share the Form

1. Click **Send** (top right)
2. Select the 🔗 **link tab**
3. Check ✅ **Shorten URL**
4. Copy the short link → drop in WhatsApp group

---

## Deliverable 2: Google Sheet Template

### Step 1 — Connect Responses to Sheet

In the Form editor:
- Click **Responses** tab
- Click the Google Sheets icon (🟢)
- Select **Create new spreadsheet**
- Name it: `Guys Gang Camping 2026 — Responses`

This auto-creates **Tab 1: Raw**

---

### Tab 1: Raw (auto-generated, do not edit)

This is populated automatically from form responses. Do not touch column order. It will look like:

| Timestamp | Email | Name | WhatsApp | Dietary | Tent? | Tent Capacity | Sleep Gear | Cooking Gear | Chairs | Entertainment | Transport | Passengers | Notes |
|-----------|-------|------|----------|---------|-------|---------------|------------|--------------|--------|---------------|-----------|------------|-------|
| 6/11 08:12 | aj@mail.com | Arjun | +46701234 | None | Yes - own | 2 | Sleeping bag, Mat | Large pot, Frying pan | 2 | Speaker | Driving | 3 | - |
| 6/11 09:44 | bk@mail.com | Ben | +46709876 | Vegetarian | No | - | None - need to borrow | None | 0 | Frisbee | Need a ride | - | Arriving at 12 |
| 6/11 11:02 | cm@mail.com | Carlos | +46701122 | No pork | Yes - share | 3 | Sleeping bag | BBQ grill, Charcoal, Tongs | 4 | Football, Hammock | Driving | 2 | - |

> 💡 **Cleanup tip:** Responses with slight name variations (e.g., "arjun" vs "Arjun") — fix in the Raw tab. Duplicate submissions (same name + email) — delete the older row. Partial responses — follow up via WhatsApp.

---

### Tab 2: Summary (create manually)

**Create this tab yourself.** Click `+` at the bottom → rename to `Summary`.

Paste this layout and formulas:

#### Section A — Headcount

| Metric | Formula | Expected |
|--------|---------|----------|
| Total responses | `=COUNTA(Raw!C2:C)` | 12 |
| Non-responders | `=12-COUNTA(Raw!C2:C)` | 0 |

#### Section B — Dietary Breakdown

Paste this into cells A10 onwards:

```
Dietary Restriction        Count
None / eats everything     =COUNTIF(Raw!E2:E,"*None*")
Vegetarian                 =COUNTIF(Raw!E2:E,"*Vegetarian*")
Vegan                      =COUNTIF(Raw!E2:E,"*Vegan*")
Halal only                 =COUNTIF(Raw!E2:E,"*Halal*")
No pork                    =COUNTIF(Raw!E2:E,"*pork*")
Nut allergy                =COUNTIF(Raw!E2:E,"*Nut*")
Gluten-free                =COUNTIF(Raw!E2:E,"*Gluten*")
Lactose intolerant         =COUNTIF(Raw!E2:E,"*Lactose*")
```

#### Section C — Shelter Summary

```
Metric                              Formula
People bringing own tent            =COUNTIF(Raw!F2:F,"*own tent*")
People offering shared tent         =COUNTIF(Raw!F2:F,"*share*")
People needing tent space           =COUNTIF(Raw!F2:F,"*someone else*")
Total tent capacity (approx.)       =SUMIF(Raw!F2:F,"*Yes*",Raw!G2:G)
People without sleeping bag         =COUNTIF(Raw!H2:H,"*None*")
```

#### Section D — Cooking Equipment Tally

```
Item                    Formula
Large pots available    =COUNTIF(Raw!I2:I,"*Large pot*")
Frying pans             =COUNTIF(Raw!I2:I,"*Frying pan*")
Gas stoves              =COUNTIF(Raw!I2:I,"*gas stove*")
BBQ grills              =COUNTIF(Raw!I2:I,"*BBQ grill*")
Charcoal bags           =COUNTIF(Raw!I2:I,"*Charcoal*")
Total camp chairs       =SUM(Raw!J2:J)
```

#### Section E — Transport

```
Metric                  Formula
Drivers available       =COUNTIF(Raw!L2:L,"*Driving*")
Total seats available   =SUM(Raw!M2:M)
People needing rides    =COUNTIF(Raw!L2:L,"*Need a ride*")
```

---

### Tab 3: Gaps (create manually)

**Create this tab yourself** → rename to `Gaps`.

This is the **Saturday morning action list**. Fill it in manually based on Tab 2 data.

Template:

```
CATEGORY        HAVE    NEED    GAP     ASSIGNED TO
Tents           5       6       -1      [Name]: Please bring your spare tent
Sleeping bags   9       12      -3      [Name A], [Name B], [Name C]: Borrow or buy
Camp chairs     8       12      -4      [Name]: Bring 2 extra, [Name]: Bring 2 extra
Gas stoves      1       2       -1      ACTION: Purchase/rent before Saturday
BBQ grill       1       1       ✅      Covered
Large pot       2       2       ✅      Covered
Drivers         3       3       ✅      3 cars, 9 passengers — all sorted
Vegetarian food ✅      ✅      ✅      Menu already accommodates
```

---

## Deliverable 3: Communication Templates

---

### 📣 Message 1 — Initial Announcement (send Wednesday 10 June, evening)

```
Hey lads! 🏕️🔥

Camping trip is LOCKED IN — Saturday 13 June.

One quick thing before we go: please fill out this 3-minute form so we 
know who's bringing what, who needs a tent, transport arrangements, and 
any food allergies.

👉 [YOUR FORM LINK HERE]

Deadline: Thursday 11 June, 9 PM

No form = we can't guarantee your sleeping arrangement or food 
preferences. Don't be the guy who shows up with nothing and eats 
everyone else's food 😄

Takes 3 mins. Do it now while you're reading this!

— The Organisers 🤙
```

---

### 🔔 Message 2 — Friday Reminder (Friday 11 June, 10 AM)

```
⏰ 48-hour reminder lads!

We're 2 days away and still waiting on a few of you to fill in the 
camping form. 

✅ Submitted so far: [X/12]
⏳ Still waiting on: @[Name], @[Name], @[Name]

👉 [YOUR FORM LINK HERE]

Seriously takes 3 minutes. We need your info to sort sleeping 
arrangements and food. Deadline is tonight, 9 PM 🙏

See you Saturday! 🔥
```

> 💡 **Tagging tip:** Use first names or @ handles depending on your WhatsApp group setup. Keep the tone light — "still waiting on" not "you haven't done it yet."

---

### 📊 Message 3 — Saturday Morning Summary (before 9 AM Saturday)

```
Good morning legends! ☀️ IT'S CAMPING DAY!

Quick pre-departure summary — please check your name below:

📦 WHAT WE HAVE COVERED:
• Tents: [X] confirmed → fits [Y] people ✅
• Sleeping bags: [X]/12 ✅
• Camp chairs: [X] total ✅
• Gas stoves: [X] ✅
• BBQ grill: ✅ 
• Transport: [X] drivers, [Y] seats — all sorted ✅

⚠️ WHAT WE STILL NEED:
• [X] sleeping bags/mats
• [X] extra camp chairs

📋 ACTION ITEMS (please confirm in chat):
→ @[Name]: Can you bring your spare sleeping bag?
→ @[Name] & @[Name]: Please stop at [store] for 2 folding chairs (~150 SEK)
→ @[Name]: Grab a bag of ice on the way

🚗 TRANSPORT:
• Car 1 — [Driver Name]: picks up @[Name], @[Name], @[Name]
• Car 2 — [Driver Name]: picks up @[Name], @[Name]  
• Car 3 — [Driver Name]: picks up @[Name], @[Name], @[Name]

🕙 DEPARTURE: 10:00 AM — don't be late, lunch waits for no one 😄

See you all shortly! LET'S GO 🏕️🔥
```

---

## Deliverable 4: Coordination Dashboard

*Print or screenshot this Saturday morning and share in the group chat.*

---

```
╔══════════════════════════════════════════════════════════════════╗
║      🏕️  GUYS GANG CAMPING — SATURDAY DASHBOARD  🏕️            ║
║                    13 June 2026                                  ║
╚══════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ WHO SUBMITTED THE FORM  (update with names)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 ✅  1. ________________     ✅  7. ________________
 ✅  2. ________________     ✅  8. ________________
 ✅  3. ________________     ✅  9. ________________
 ✅  4. ________________     ✅ 10. ________________
 ✅  5. ________________     ✅ 11. ________________
 ✅  6. ________________     ✅ 12. ________________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍽️  DIETARY SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  No restrictions:    ___    Vegetarian: ___    Vegan: ___
  Halal only:         ___    No pork:    ___    Other: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏠  SHELTER STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Tents confirmed:    ___    Total capacity: ___ people
  Need tent space:    ___    STATUS: [ ✅ COVERED  |  ⚠️ GAP ]

  People without sleeping bag: ___
  STATUS: [ ✅ COVERED  |  ⚠️ NEED TO BORROW/BUY ]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🍳  COOKING EQUIPMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ITEM              HAVE    NEED    STATUS
  Large pots        ___     2       [ ✅ / ⚠️ ]
  Gas stoves        ___     2       [ ✅ / ⚠️ ]
  Frying pans       ___     2       [ ✅ / ⚠️ ]
  BBQ grill         ___     1       [ ✅ / ⚠️ ]
  Charcoal bags     ___     2       [ ✅ / ⚠️ ]
  Camp chairs       ___     12      [ ✅ / ⚠️ ]
  Folding tables    ___     2       [ ✅ / ⚠️ ]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗  TRANSPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Car 1: ______________ (driver) → Seats: ___ → Passengers: ___________
  Car 2: ______________ (driver) → Seats: ___ → Passengers: ___________
  Car 3: ______________ (driver) → Seats: ___ → Passengers: ___________

  STATUS: [ ✅ ALL SORTED  |  ⚠️ STILL NEED SEATS ]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️  IDENTIFIED GAPS & ASSIGNED TASKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  → _____________: _____________________________________________
  → _____________: _____________________________________________
  → _____________: _____________________________________________
  → GROUP BUY:     Stop at [Biltema/Clas Ohlson/ICA] for: ________

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕙  DEPARTURE: 10:00 AM sharp  |  📍 Meet at: [LOCATION]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ⚡ Quick Deploy Checklist (< 30 minutes)

```
[ ] 10 min — Create form at forms.google.com (paste questions above)
[ ]  3 min — Configure settings (email collect, allow edits, confirmation msg)
[ ]  2 min — Link form to Google Sheet (Responses → Sheets icon)
[ ]  5 min — Create Summary and Gaps tabs, paste formulas
[ ]  2 min — Copy short form link
[ ]  3 min — Send initial WhatsApp announcement
[ ]  5 min — Bookmark: Sheet URL, Form edit URL, Form response URL
             (save all three — you'll need them on Friday and Saturday)
```

---

*Need help with the Google Sheet formulas or want a real-time shareable template? Drop a copy of your Sheet → anyone with link can view.*
