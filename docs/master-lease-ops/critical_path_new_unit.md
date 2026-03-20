# Critical Path: New Unit Activation

## Pre-Flight Gate (Must Pass Before Entering Flow)

Run once. If any fail, do not enter the flow — fix first.

- [ ] Portfolio occupancy ≥ 90%
- [ ] Cash flow positive ≥ 3 consecutive months
- [ ] No active eviction or C4K event in progress
- [ ] No more than 1 unit turning over in next 60 days
- [ ] Capital-at-risk ratio < 60% (total lease obligations ÷ total OpCo assets)
- [ ] Eviction reserve fully funded for all existing units (MXN 54K/unit)
- [ ] C4K reserve fully funded for all existing units (MXN 36K/unit)
- [ ] Tenant waitlist depth ≥ 3 pre-screened, ready-to-move candidates
- [ ] Owner pipeline depth ≥ 2 interested owners
- [ ] MXN 126,000 ($7,000) available for new unit commitment (deposit + eviction + C4K)

**Gate passed → Enter flow.**

See `cashflow_projection_36mo.md` for portfolio growth targets and `business_plan_cdmx_master_lease.md` for underwriting standards.

---

## The Flow

Three parallel tracks converge at a single decision point. Nothing waits that doesn't have to.

```
DAY 1
│
├── TRACK A: OWNER                    ├── TRACK B: TENANT                  ├── TRACK C: UNIT FINANCIALS
│   (from owner waitlist)             │   (from tenant waitlist)           │
│                                     │                                    │
│ A1. Select candidate owner          │ B1. Select 2-3 candidates          │
│     from pipeline                   │     whose timeline/budget          │
│                                     │     match this unit                │
│ A2. Request documents:              │                                    │
│     • INE/passport                  │ B2. Send unit photos/video         │
│     • Escritura pública             │     to candidates. Confirm         │
│     • Certificado libertad          │     interest.                      │
│       de gravamen (<30 days)        │                                    │
│     • Boleta predial (current)      │ B3. Run Nova Credit on             │
│     • SACMEX receipt (current)      │     top candidate:                 │
│     • Mortgage proof (if any)       │     • FICO ≥ 650                   │
│     • Condo: escritura              │     • No bankruptcy 7yr            │
│       constitutiva + reglamento     │     • No active collections >$500  │
│       + last 2 assembly minutes     │     • No eviction history          │
│       + cuotas receipt              │     • < 3 late payments 24mo       │
│                                     │                                    │
│ A3. Verify ownership at RPP         │ B4. Income verification:           │ C1. Research comps
│     (online or in-person)           │     • 3mo bank statements          │     (Inmuebles24, Airbnb,
│                                     │     • Pay stubs or employer letter │      FB groups)
│ A4. Cross-check: owner name         │     • Gross income ≥ 3× rent      │
│     on INE = name on escritura      │     • If self-employed: 2yr tax    │ C2. Build unit P&L:
│     = name on RPP = name on         │       returns + current P&L        │     Sublease rent: ___
│     predial                         │                                    │     Master lease:  -___
│                                     │ B5. Employment check:              │     OpEx:          -2,000
│ A5. Check mortgage risk:            │     • LinkedIn cross-reference     │     Vacancy:       -700
│     • Term remaining vs             │     • Call/email employer HR       │     ISR (30%):     -___
│       master lease term             │       (verify independently,       │     Net/month:     ___
│     • Current on payments?          │        not tenant-provided #)      │
│     • Monthly payment amount        │     • Remote job: verify company   │ C3. Check thresholds:
│                                     │       exists + tenant's role       │     • Spread ≥ 8K? ___
│ A6. If condo:                       │                                    │     • Net ≥ 3.5K? ___
│     • Reglamento permits            │ B6. Landlord references:           │     • Recovery ≤ 24mo? ___
│       subleasing? Y/N               │     • Contact 2 previous           │     • Portfolio CAR
│     • Assembly discussed            │       landlords                    │       stays < 60%? ___
│       rental restrictions? Y/N      │     • Verify phone #s              │
│     • Cuotas current? Y/N           │       independently               │ C4. Any threshold fail
│                                     │     • Paid on time?               │     → renegotiate rent
│ A7. Spousal/co-owner check:         │     • Property condition           │       with owner or walk
│     • Married? Both sign.           │       at move-out?                │
│     • Co-owners? All consent.       │     • Would rent again?           │
│                                     │                                    │
│ A8. Score owner:                    │ B7. Fraud checks:                  │
│     Any Red → STOP                  │     • Google name + city           │
│     2+ Yellow → add protections     │     • Reverse image search         │
│                                     │     • Bank statement authenticity  │
│                                     │     • Gut check                    │
│                                     │                                    │
│                                     │ B8. Score tenant:                  │
│                                     │     Any Red → REJECT, try          │
│                                     │     next on waitlist               │
│                                     │     2+ Yellow → shorter term       │
│                                     │     or enhanced deposit            │
│                                     │     (if hospedaje)                 │
│                                     │                                    │
├─────────────────────────────────────┴────────────────────────────────────┘
│
▼ DAY 7-10: CONVERGENCE GATE
│
│ All three tracks must clear:
│   □ Owner screening: all Green or acceptable Yellow
│   □ Tenant screening: all Green or acceptable Yellow
│   □ Financials: all thresholds pass
│   □ Property inspection complete (see below)
│
│ ANY FAIL → recycle back to waitlist for replacement owner or tenant
│ ALL PASS → proceed to execution
│
▼ DAY 7-10: PROPERTY INSPECTION (can happen anytime during Days 1-10, whenever owner grants access)
│
│ Walk the unit with camera:
│
│ □ Structure: cracks, water damage, seismic damage → Red if unresolved
│ □ Electrical: test every outlet/switch, check panel → Red if overloaded/amateur wiring
│ □ Plumbing: every faucet, flush toilets, check under sinks → Red if active leaks
│ □ Hot water: test at furthest fixture from boiler, note type/age → Red if non-functional
│ □ Water pressure: test shower specifically → note if pump needed (cost: ~MXN 3-5K)
│ □ Internet: speed test existing connection OR verify provider availability ≥ 100 Mbps → Red if unavailable
│ □ Windows/doors: operation, locks, seals
│ □ Mold: visible anywhere → Red (walk away)
│ □ Gas: connections, smell test, regulator condition
│ □ Building: elevator, security, common areas, access system
│ □ FURNISHED CHECK: bed + mattress, desk, chair, sofa, dining table/chairs,
│   fridge, stove, microwave, pots/pans, dishes/utensils, sheets, towels,
│   pillows, duvet → if NOT furnished or partially furnished → OWNER REMEDIATION
│   (direct owner to furniture partner to complete before signing)
│
│ Photograph everything. Video walkthrough. Timestamped.
│
│ Hard Red flags (mold, structural, seismic, no internet) → WALK AWAY
│ Not furnished → OWNER REMEDIATION PIPELINE (direct to furniture partner, check in until complete)
│ Owner-fix issues (items owner must address before we'd sign) → OWNER REMEDIATION PIPELINE below
│ OpCo-fix issues (cosmetic, plumbing fixes, boiler, pressure, paint, locks) → REHAB EVALUATION below
│ No issues → skip both, proceed to EXECUTION
│
│ ┌─────────────────────────────────────────────────────────────────┐
│ │         OWNER REMEDIATION PIPELINE (Warm Hold)                  │
│ │                                                                 │
│ │ Triggered when: inspection reveals issues that the OWNER must   │
│ │ fix before the unit is viable, but the owner + location +       │
│ │ economics are otherwise attractive. Don't burn the relationship │
│ │ — park it and nurture it.                                       │
│ │                                                                 │
│ │ Examples:                                                       │
│ │   • Boiler needs replacement (owner's structural responsibility)│
│ │   • Electrical panel needs upgrade                              │
│ │   • Plumbing leak owner must repair                             │
│ │   • Building common area issues (elevator, security)            │
│ │   • Condo cuotas delinquent (owner must cure)                   │
│ │   • Predial or water bills delinquent (owner must cure)         │
│ │   • Unit needs paint/refresh that owner agreed to do            │
│ │   • Internet provider needs to be installed by owner            │
│ │                                                                 │
│ │ PROCESS:                                                        │
│ │                                                                 │
│ │ 1. Document: Send owner a clear written list of items           │
│ │    that need to be resolved before you can proceed.             │
│ │    Be specific: "boiler needs replacement" not "hot water       │
│ │    doesn't work well."                                          │
│ │                                                                 │
│ │ 2. Agree on timeline: "Once these are addressed, we're          │
│ │    ready to sign. How long do you think this will take?"         │
│ │    Get a date. Write it down.                                   │
│ │                                                                 │
│ │ 3. Move to OWNER REMEDIATION TRACKER (separate from             │
│ │    active pipeline):                                            │
│ │                                                                 │
│ │    Owner: _______________                                       │
│ │    Property: _______________                                    │
│ │    Issues: _______________                                      │
│ │    Agreed completion date: _______________                      │
│ │    Next check-in date: _______________                          │
│ │                                                                 │
│ │ 4. Check-in cadence:                                            │
│ │    • 1 week after agreement: brief WhatsApp "How's              │
│ │      progress on [item]?"                                       │
│ │    • Every 2 weeks thereafter until resolved                    │
│ │    • Keep tone warm and helpful, not demanding:                 │
│ │      "Just checking in — let me know when you're ready          │
│ │       and we'll get the lease signed right away."               │
│ │    • Offer to recommend contractors if they need help           │
│ │      finding someone (builds relationship + speeds resolution)  │
│ │                                                                 │
│ │ 5. When owner reports items complete:                           │
│ │    • Re-inspect the unit to verify                              │
│ │    • If verified → re-enter the flow at CONVERGENCE GATE        │
│ │      (re-check financials + match tenant from waitlist)         │
│ │    • If not actually fixed → update list, reset check-in        │
│ │                                                                 │
│ │ 6. Timeout: If no progress after 90 days, demote to             │
│ │    cold pipeline. Check in quarterly. Don't waste weekly         │
│ │    attention on owners who aren't moving.                       │
│ │                                                                 │
│ │ 7. Warm re-entry: If a demoted owner contacts you later         │
│ │    ("I fixed everything"), treat as a new opportunity —          │
│ │    re-inspect and re-enter the flow.                            │
│ │                                                                 │
│ │ KEY PRINCIPLE: These owners are ASSETS in your pipeline,        │
│ │ not rejects. Jackie Lange's #1 acquisition strategy was         │
│ │ reminding owners she was available every time she saw them.     │
│ │ The owner who can't sign today may be your best deal in         │
│ │ 3 months.                                                       │
│ └─────────────────────────────────────────────────────────────────┘
│
▼ DAY 7-10: REHAB INVESTMENT CASE EVALUATION (If Needed)
│
│ Triggered when inspection reveals fixable deficiencies that prevent
│ subletting at target rent but don't make the unit fundamentally unviable.
│
│ Examples: needs paint, water pressure pump, new boiler/calentador,
│ lock replacement, minor plumbing, electrical fixes, deep clean,
│ window seals, internet installation, minor kitchen/bath cosmetic work.
│
│ ┌─────────────────────────────────────────────────────────────────┐
│ │                    STEP 1: SCOPE THE REHAB                     │
│ │                                                                 │
│ │ Itemize every deficiency found in inspection:                   │
│ │                                                                 │
│ │ Item                          Est. Cost       Time to Complete  │
│ │ ________________________      MXN _______     _______ days      │
│ │ ________________________      MXN _______     _______ days      │
│ │ ________________________      MXN _______     _______ days      │
│ │ ________________________      MXN _______     _______ days      │
│ │                                                                 │
│ │ Total rehab cost:             MXN _______                       │
│ │ Total rehab time:             _______ days                      │
│ │ (items run in parallel where possible — use longest path)       │
│ │                                                                 │
│ │ Common CDMX rehab costs:                                        │
│ │   Paint (full unit):           MXN 5,000-12,000                 │
│ │   Water pressure pump:         MXN 3,000-5,000                  │
│ │   New boiler/calentador:       MXN 4,000-10,000                 │
│ │   Lock replacement (all):      MXN 2,000-4,000                  │
│ │   Minor plumbing fixes:        MXN 1,500-5,000                  │
│ │   Electrical fixes:            MXN 2,000-8,000                  │
│ │   Deep clean:                  MXN 1,500-3,000                  │
│ │   Internet installation:       MXN 1,000-3,000                  │
│ │   Window seal replacement:     MXN 2,000-5,000                  │
│ │   Minor kitchen/bath cosmetic: MXN 5,000-20,000                 │
│ └─────────────────────────────────────────────────────────────────┘
│
│ ┌─────────────────────────────────────────────────────────────────┐
│ │                   STEP 2: WHO PAYS?                             │
│ │                                                                 │
│ │ Three options to negotiate with owner:                          │
│ │                                                                 │
│ │ OPTION A — Owner pays for rehab before lease starts             │
│ │   • Best case. You wait for completion, then sign.              │
│ │   • Risk: owner does cheap/bad work. Inspect after.             │
│ │   • No impact on your capital.                                  │
│ │                                                                 │
│ │ OPTION B — OpCo pays, offset against rent                       │
│ │   • You do the rehab, deduct cost from first X months rent.     │
│ │   • You control quality and timeline.                           │
│ │   • Requires contract clause:                                   │
│ │     "EL ARRENDATARIO realizará las mejoras descritas en el      │
│ │      Anexo [X] por un monto de MXN [___]. Dicho monto será     │
│ │      descontado de las rentas mensuales a razón de MXN [___]    │
│ │      por mes, durante los primeros [___] meses del contrato."   │
│ │                                                                 │
│ │ OPTION C — OpCo pays, compensated via rent reduction            │
│ │   • Owner drops rent permanently (or for initial term)          │
│ │     in exchange for you fixing the unit.                        │
│ │   • Example: rent drops from MXN 18K to MXN 15K for first      │
│ │     2 years = MXN 72K savings vs MXN 30K rehab = net positive.  │
│ │   • Increases your spread for the life of the reduced-rent      │
│ │     period.                                                     │
│ │                                                                 │
│ │ OPTION D — Hybrid: owner pays materials, OpCo pays labor        │
│ │   • Splits the burden. Common in practice.                      │
│ └─────────────────────────────────────────────────────────────────┘
│
│ ┌─────────────────────────────────────────────────────────────────┐
│ │              STEP 3: RUN THE INVESTMENT CASE                    │
│ │                                                                 │
│ │ Only proceed if the rehab creates a better deal than a          │
│ │ move-in-ready unit. The rehab must earn its way in.             │
│ │                                                                 │
│ │ A. SPREAD TEST                                                  │
│ │                                                                 │
│ │    Without rehab (if unit is leasable as-is at lower rent):     │
│ │    Sublease rent (reduced):    MXN _______                      │
│ │    Master lease rent:          MXN _______                      │
│ │    Spread (as-is):             MXN _______                      │
│ │                                                                 │
│ │    With rehab:                                                  │
│ │    Sublease rent (full market): MXN _______                     │
│ │    Master lease rent:           MXN _______ (may be lower       │
│ │                                   if negotiated per Option C)   │
│ │    Spread (post-rehab):         MXN _______                     │
│ │                                                                 │
│ │    Spread improvement:          MXN _______ /month              │
│ │    Rehab cost:                  MXN _______                     │
│ │    Rehab payback (months):      cost ÷ spread improvement       │
│ │                                                                 │
│ │    □ Payback ≤ 6 months → STRONG case                          │
│ │    □ Payback 7-12 months → ACCEPTABLE if lease term ≥ 3 years  │
│ │    □ Payback 13-18 months → MARGINAL, only with 5-year lease   │
│ │    □ Payback > 18 months → REJECT rehab, negotiate harder      │
│ │      or walk                                                    │
│ │                                                                 │
│ │ B. LEASE TERM TEST                                              │
│ │                                                                 │
│ │    Rehab payback period:        _______ months                  │
│ │    Minimum master lease term:   payback × 3                     │
│ │                                                                 │
│ │    (You need at least 3× the payback period on the lease        │
│ │     to justify the investment — 1/3 recovering cost, 2/3        │
│ │     capturing the improved spread as pure profit.)              │
│ │                                                                 │
│ │    Negotiated lease term:       _______ months                  │
│ │    □ Term ≥ payback × 3 → PASS                                 │
│ │    □ Term < payback × 3 → FAIL: need longer term or lower cost │
│ │                                                                 │
│ │ C. WAITLIST DEMAND TEST                                         │
│ │                                                                 │
│ │    Will the rehabbed unit fill faster or at higher rent?        │
│ │                                                                 │
│ │    Current waitlist depth for this                              │
│ │    neighborhood/price range:    _______ candidates              │
│ │    Waitlist velocity (new qualified                              │
│ │    leads per month):            _______/month                   │
│ │                                                                 │
│ │    □ Depth ≥ 5 AND velocity ≥ 3/month → HIGH confidence        │
│ │      in filling post-rehab. Green light.                        │
│ │    □ Depth 3-5 OR velocity 1-3/month → MODERATE confidence.     │
│ │      Proceed only if spread test is STRONG.                     │
│ │    □ Depth < 3 AND velocity < 1/month → LOW confidence.         │
│ │      Do not invest in rehab — demand doesn't justify it.        │
│ │      Either take the unit as-is at reduced rent or walk.        │
│ │                                                                 │
│ │ D. CAPITAL IMPACT TEST                                          │
│ │                                                                 │
│ │    Rehab cost:                  MXN _______                     │
│ │    Standard unit commitment:    MXN 126,000 ($7,000)                     │
│ │    Total capital for this unit: MXN _______                     │
│ │    (standard + rehab)                                           │
│ │                                                                 │
│ │    Portfolio CAR after this unit                                │
│ │    (including rehab capital):   _______%                        │
│ │    □ CAR still < 60% → PASS                                    │
│ │    □ CAR ≥ 60% → FAIL: rehab pushes you over leverage limit    │
│ │                                                                 │
│ │    Could this rehab capital fund a move-in-ready unit instead?  │
│ │    □ If YES and a move-in-ready unit is available in pipeline   │
│ │      → skip rehab, take the easier deal                        │
│ │    □ If NO move-in-ready alternative exists → rehab is the      │
│ │      path to growth, proceed if other tests pass                │
│ │                                                                 │
│ │ E. TIMELINE IMPACT TEST                                         │
│ │                                                                 │
│ │    Rehab duration:              _______ days                    │
│ │    Days until unit produces income:                              │
│ │      Standard flow:             14-17 days                      │
│ │      With rehab:                14-17 + rehab days              │
│ │                                                                 │
│ │    During rehab, if OpCo is paying rent to owner:               │
│ │    Dead rent (rent paid with no income):  MXN _______ total     │
│ │    □ Factor dead rent into payback calculation above            │
│ │                                                                 │
│ │    If rent offset (Option B) or rent reduction (Option C):      │
│ │    Dead rent may be zero → much better.                         │
│ │    □ Negotiate: rent doesn't start until rehab complete         │
│ │      OR first X months rent-free as rehab compensation          │
│ └─────────────────────────────────────────────────────────────────┘
│
│ ┌─────────────────────────────────────────────────────────────────┐
│ │              STEP 4: REHAB DECISION                             │
│ │                                                                 │
│ │ All must pass:                                                  │
│ │   □ Spread payback ≤ 12 months (≤ 6 preferred)                 │
│ │   □ Lease term ≥ 3× payback period                             │
│ │   □ Waitlist demand: MODERATE or HIGH confidence                │
│ │   □ Portfolio CAR stays < 60% after rehab capital               │
│ │   □ No move-in-ready alternative available that's better ROI    │
│ │                                                                 │
│ │ ALL PASS → approve rehab, add to contract, proceed to EXECUTION│
│ │ ANY FAIL → either:                                              │
│ │   • Renegotiate (lower rent, longer term, owner pays more)      │
│ │   • Take unit as-is at reduced sublease rent (if spread works)  │
│ │   • Walk away                                                   │
│ └─────────────────────────────────────────────────────────────────┘
│
│ If rehab approved:
│   □ Add rehab scope + cost + offset/reduction terms to master lease as Anexo
│   □ Add rehab timeline to contract (rent starts after completion, or offset applies)
│   □ Get 2-3 quotes from vetted contractors before committing
│   □ Inspect completed rehab work before signing off and starting rent
│   □ Adjust unit P&L projection to reflect actual rehab cost + improved spread
│   □ Update portfolio capital-at-risk with rehab capital included
│   □ Tenant waitlist: confirm matched tenant is willing to wait for rehab completion
│     (if not, match a different tenant whose timeline fits)
│
▼ DAY 10-14: EXECUTION (Sequential — These Have Dependencies)
│   (If rehab: execution starts after rehab complete, or contract signed with rehab terms baked in)
│
│ E1. Final rent negotiation with owner
│     (informed by inspection findings + comp analysis)
│
│ E2. Attorney reviews/customizes both contracts
│     • Master lease from template (contrato_01)
│     • Sublease from template (contrato_02)
│     • Confirms hospedaje vs arrendamiento classification
│     • Confirms sublease authorization is Art. 2481 (general), NOT 2482
│     □ Attorney signs off
│
│ E3. Sign master lease with owner (+ spouse if applicable)
│     │
│     ├── Simultaneously:
│     │   □ Complete acta de entrega-recepción (room by room, photos, both sign)
│     │   □ Collect keys / access cards
│     │   □ Pay deposit via bank transfer (MXN 21,000 ($1,167))
│     │   □ Fund eviction reserve (MXN 63,000 ($3,500) into OpCo designated account)
│     │   □ Fund C4K reserve (MXN 42,000 ($2,333) into OpCo designated account)
│     │
│     ├── Within 5 days:
│     │   □ If condo: notify administración del condominio
│     │
│     ├── Within 30 days:
│     │   □ Register lease in CDMX digital registry
│
│ E4. Sign sublease with tenant (same day or next day as E3)
│     │
│     ├── Simultaneously:
│     │   □ Collect deposit (1 month if arrendamiento; negotiable if hospedaje)
│     │   □ Collect first month rent via Wise → SPEI
│     │   □ Issue CFDIs for deposit + rent
│     │   □ Tenant signs aviso de privacidad acknowledgment
│     │
│     ├── Immediately after signing:
│     │   □ Send welcome packet (CLABE, Wise instructions, building access, condo rules)
│     │   □ Send vendor list (furniture packages, cleaning services)
│     │   □ Create WhatsApp group: tenant + furniture vendor + OpCo
│     │   □ Coordinate furniture delivery for move-in day
│
│ E5. Confirm unit readiness (day before move-in)
│     □ Unit clean
│     □ Internet active + speed tested
│     □ All utilities functional
│     □ Furniture delivery confirmed for tomorrow
│
▼ DAY 14-17: MOVE-IN
│
│ □ Meet tenant at unit
│ □ Walk through together — complete acta de entrega-recepción with photos, both sign
│ □ Hand over keys / access cards
│ □ Speed test together (screenshot, save)
│ □ Confirm hot water, gas, electricity functional
│ □ Confirm furniture delivered and set up
│ □ Neighborhood orientation (2 minutes: grocery, pharmacy, metro)
│ □ "I'll check in with you in a few days"
│
▼ UNIT IS LIVE — Enter Monitoring Loop
│
│ ┌─────────────────────────────────────────────────┐
│ │              MONITORING CADENCE                  │
│ │                                                  │
│ │  Day 3-5:    WhatsApp check-in                  │
│ │              "How's everything? Internet good?   │
│ │               Any issues?"                       │
│ │                                                  │
│ │  Day 10-14:  Quick follow-up                    │
│ │              "Still good? Anything we missed?"   │
│ │              Resolve any open maintenance items  │
│ │                                                  │
│ │  Day 25-28:  Confirm month 2 rent received      │
│ │              If missing → WhatsApp reminder      │
│ │              If still missing Day 3 → Stripe     │
│ │              payment link (3.6% = tenant's cost) │
│ │                                                  │
│ │  Monthly:    Confirm rent received               │
│ │              Brief check-in                      │
│ │              Pay owner                           │
│ │              Issue CFDIs                         │
│ │                                                  │
│ │  Day -60:    "Planning to stay or move on?"      │
│ │              If staying → offer renewal          │
│ │              If leaving → match from waitlist    │
│ │                                                  │
│ │  Day -30:    If leaving:                         │
│ │              • Send move-out instructions        │
│ │              • Match replacement from waitlist   │
│ │              • Coordinate furniture pickup/      │
│ │                transfer to next tenant           │
│ │              • Schedule turnover clean           │
│ │                                                  │
│ │  Move-out:   Acta de entrega with photos         │
│ │  day         Collect keys                        │
│ │              Process deposit return (immediate   │
│ │              per Art. 2422, minus damages)       │
│ │                                                  │
│ │  Turnover:   Clean PM → new tenant next AM      │
│ │              Target: ≤ 48 hours downtime         │
│ │              Furniture stays if next tenant      │
│ │              wants same package                  │
│ │              New acta de entrega with new tenant │
│ │                                                  │
│ │  → Loop back to UNIT IS LIVE                    │
│ └─────────────────────────────────────────────────┘
│
▼ MONTHLY: PORTFOLIO HEALTH (All Units)
│
│ □ Total occupancy: ___% (target ≥ 90%)
│ □ All rents received? Flag any late.
│ □ All owner payments made?
│ □ All CFDIs issued?
│ □ Reserves still fully funded? (eviction + C4K per unit)
│ □ Capital-at-risk ratio: ___% (< 60%)
│ □ Any turnovers in next 60 days? Waitlist matched?
│ □ Tenant behavioral flags? (late payments, complaints, communication quality)
│ □ Owner issues? (utility defaults, maintenance delays, disputes)
│ □ Waitlist depth: tenants ≥ 3 ready, owners ≥ 2 interested?
│
│ All clear → eligible for next unit. Return to Pre-Flight Gate.
│ Any issue → resolve before expanding.
│
▼ QUARTERLY: PORTFOLIO REVIEW
│
│ □ Per-unit P&L vs underwriting projections
│ □ Identify underperformers (spread < 8K, chronic vacancy, problem owners)
│ □ Bad tenant post-mortem — what did screening miss? Update criteria.
│ □ Market rent check — sublease rates still competitive?
│ □ Vendor review — furniture partner reliable? Cleaning quality?
│ □ Condo developments — any reglamento changes?
│ □ Legal/regulatory — any new CDMX reforms?
│ □ Owner remediation pipeline — any owners ready to re-enter flow?
│ □ Kill criteria check:
│     • Owner conversion rate: if < 3% after 50+ contacts, rethink supply strategy
│     • Tenant pipeline: if < 5 qualified leads in last 60 days, rethink demand channels
│     • Average spread across portfolio: if < MXN 8K, market may not support model
│ □ Expansion decision → Pre-Flight Gate

---

## Timing

```
Standard (no rehab):
  Tracks A + B + C in parallel:              Days 1-10
  Convergence gate + inspection:             Day 7-10
  Execution (contracts, signing, funding):   Days 10-14
  Move-in:                                   Days 14-17
  Total: 14-17 days. With warm waitlists: as fast as 10 days.

With rehab:
  Tracks A + B + C in parallel:              Days 1-10
  Convergence gate + inspection:             Day 7-10
  Rehab evaluation:                          Day 7-12
  Rehab execution:                           Day 12 + [rehab duration]
  Contract signing (with rehab terms):       Can overlap with rehab start
  Move-in:                                   Rehab complete + 3 days
  Total: 17 days + rehab duration. Typical rehab: 7-21 days.
  Total with rehab: 24-38 days to income.
```

## Walk-Away Triggers (At Any Point in the Flow)

```
Owner won't grant Art. 2481 sublease authorization → OUT
Title unclear or undisclosed liens → OUT
Condo reglamento prohibits subleasing → OUT
Spread < MXN 8,000 after negotiation → OUT
No internet ≥ 100 Mbps → OUT
Structural/seismic damage → OUT
Owner evasive on documents → OUT
Mortgage term shorter than master lease → OUT (unless owner can demonstrate refinance path)
Rehab payback > 18 months → OUT (or renegotiate until it drops)
Rehab pushes portfolio CAR ≥ 60% → WAIT
Move-in-ready unit available with better ROI than rehab unit → SKIP REHAB, take the easier deal
Matched tenant unwilling to wait for rehab timeline → REMATCH or defer unit
Tenant FICO < 650 → REJECT (next on waitlist)
Tenant income < 3× rent → REJECT
Any fraud signal → REJECT
Portfolio CAR would exceed 60% → WAIT
Reserves unfunded → WAIT
No waitlist match available → WAIT
Gut says no → OUT
```
