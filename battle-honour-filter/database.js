let database = {
	bt: {
		header:'Battle Traits',
		description:'A unit can have more than one Battle Trait, but it cannot have the same Battle Trait more than once',
		options: {
			coreCharacter: [
				'Swift and Agile: Add 1" to this unit’s Move characteristic. In addition, add 1 to Advance and charge rolls made for this unit.',
				'Heroic Constitution: Add 1 to the Wounds characteristic of one CHARACTER model in this unit.',
				'Resilient: Roll one D6 each time a CHARACTER model in this unit would lose a wound; on a 6, that wound is not lost.',
				'Deadly Charge: Add 1 to the Attacks characteristic of CHARACTER models in this unit in the Fight phase if this unit made a charge move, was charged, or performed a Heroic Intervention this turn.',
				'Inspiring Hero: Add 1 to the Leadership characteristic of friendly units while they are within 6" of a CHARACTER model from this unit. In addition, this unit can perform Heroic Interventions if, after the enemy has made all its charge moves, it is within 6" of any enemy units, and it can move up to 6" when doing so.',
				'Tactical Experience: While a CHARACTER model from this unit is on the battlefield, roll one D6 each time you spend a CP to use a Stratagem; on a 6, you immediately regain 1 CP.'
			],
			coreVehicle: [
				'Enhanced Engines: Add 2" to this unit’s Move characteristic. In addition, add 1 to Advance and charge rolls made for this unit.',
				'Elite Crew: Re-roll hit rolls of 1 when resolving attacks made by VEHICLE models in this unit.',
				'Improved Shielding: Add 1 to saving throws made for VEHICLE models in this unit against attacks that have an Armour Penetration characteristic of 0 or -1 (invulnerable saving throws are unaffected).',
				'Armourbane: Re-roll wound rolls of 1 when resolving attacks made by VEHICLE models in this unit that target enemy VEHICLE or MONSTER units.',
				'Repair Systems: VEHICLE models in this unit regain 1 lost wound at the start of each of your Command phases.',
				'Blessed Hull: Roll one D6 each time a mortal wound is allocated to a VEHICLE model in this unit; on a 5+ that mortal wound is ignored.'
			],
			coreMonster: [
				'Unstoppable: Add 2" to this unit’s Move characteristic. In addition, add 1 to Advance and charge rolls made for this unit.',
				'Apex Predator: Re-roll hit rolls of 1 when resolving attacks made by MONSTER models in this unit.',
				'Thickened Hide: Add 1 to saving throws made for MONSTER models in this unit against attacks that have an Armour Penetration characteristic of 0 or -1 (invulnerable saving throws are unaffected).',
				'Frenzied: Add 1 to the Attacks characteristic of MONSTER models in this unit in the Fight phase if this unit made a charge move, was charged, or performed a Heroic Intervention this turn.',
				'Regenerates: MONSTER models in this unit regain 1 lost wound at the start of each of your Command phases.',
				'Terrifying: Roll two dice when taking a Morale test for an enemy unit within 6" of this unit and discard the lowest result (if both dice results are the same, discard either one of them).'
			],
			coreOther: [
				'Fleet of Foot: Add 1" to this unit’s Move characteristic. In addition, add 1 to Advance and charge rolls made for this unit.',
				'Veteran Warriors: Re-roll hit rolls of 1 when resolving attacks made by models in this unit.',
				'Grizzled: Roll one D6 each time a model in this unit would lose a wound; on a 6, that wound is not lost.',
				'Headhunters: Add 1 to hit rolls and wound rolls made when resolving attacks with models inthis unit that target enemy CHARACTER units.',
				'Cool-headed: You can re-roll failed Morale tests taken for this unit. In addition, if a unit declares this unit as the target of their charge, this unit can fire Overwatch (and will score hits on unmodified rolls of 5+ instead of 6 when doing so).',
				'Battle-tested: This unit has the Objective Secured ability and can make attacks with ranged weapons while performing an Action without that action failing. Combat Attrition tests taken for this unit are automatically passed while it is within range of an objective marker.'
			],
			smMachineSpirit: [
				'Bellicose Machine Spirit: Improve this model\'s Weapon Skill characteristic by 3.',
				'Focused Machine Spirit: This model does not suffer the penalty incurred to its hit rolls for firing at enemy units that are within Engagement Range of it.',
				'Resilient Machine Spirit: Add 2 to this model\'s Wounds characteristic.'
			],
			smTechmarine: [
				'Expert Mechanic: If this model is part of your Crusade army, and if it was not destroyed during the battle, then at the end of the battle you can ignore one failed Out of Action test taken for a <CHAPTER> VEHICLE unit - that test is treated as having been passed instead.',
				'Bionic Extremis: This Techmarine has a 5+ invulnerable save.'
			],
			smApothecary: [
				'Master of Physiology: If this model is part of your Crusade army, and if it was not destroyed during the battle, then at the end of the battle you can ignore one failed Out of Action test taken for a <CHAPTER> unit (excluding VEHICLE and BEAST units) - that test is treated as having been passed instead.',
				'Custodian of the Future: Each time this model fights, if any friendly <CHAPTER> INFANTRY or <CHAPTER> BIKER models have been destroyed this turn, then until that fight is resolved, add 3 to this model\'s attacks characteristic.'
			],
			smAstartes: [
				'Marksman\'s Honours: Improve the Ballistic Skill of each model in this unit by 1.',
				'Aquila lmperialls: Each time a Morale test is taken for this unit, it is automatically passed. In addition, each time an Out of Action test is failed for this unit, re-roll that test.',
				'Purity Seals: Once per turn, this unit can attempt to Deny the Witch as if it were a PSYKER. If this unit is a PSYKER, then in each enemy Psychic phase, it can instead attempt to Deny the Witch one additional time.',
				'Bladesman\'s Honour: Improve the Weapon Skill of each model in this unit by 1.',
				'Terminator Honours: Select one model in this unit (if the unit has a unit champion, such as a Space Marine Sergeant, you must select that model). Add 1 to the Attacks and Leadership characteristic of the selected model. In addition, unless the selected model is a CHARACTER, you also add 1 to the selected model\'s Wounds characteristic.',
				'Centurlos Service Studs: At the start of your Command phase, select the Devastator, Tactical or Assault Doctrine. Until the start of your next Command phase, each time a model in this unit makes an attack, the doctrine you selected is considered to be active for that attack instead of whatever doctrine is actually active for your army.'
			],
			orkSquigCavalry: [
				'Savage Squigs: Each time a model in this unit makes an attack with squighog jaws, smasha squig jaws or squigosaur’s jaws, add 1 to that attack’s hit roll.',
				'Irate Squigs: Improve the Armour Penetration characteristic of squighog jaws, smasha squig jaws or squigosaur’s jaws that models in this unit are equipped with by 1.',
				'Tenacious Squigs: Add 2" to the Move characteristic of models in this unit.'
			],
			orkBigMek: [
				'Boss Mek: If this model is part of your Crusade army, and if it has not been taken out of action during a battle, then at the end of the, battle you can ignore one failed Out of Action test taken for a <CLAN> VEHICLE unit - that test is treated as having been passed instead.',
				'Mekanikal Mekaniak: This model has a 5+ invulnerable save.'
			],
			orkPainboy: [
				'Recykler: If this model is part of your Crusade army, and if it has not been taken out of action during a battle, then at the end of the battle you can ignore one failed Out of Action test taken for a <CLAN> unit (excluding VEHICLES) - that test is treated as having been passed instead.',
				'Bad Reputation: This model has a 5+ invulnerable save.'
			],
			orkMobUnit: [
				'Ded Choppy: Each time this unit fights, if it made a charge move or performed a Heroic Intervention this turn, each time a model in this unit makes an attack, add 1 to that attack’s hit roll.',
				'Cyborks: While this unit is within 6" of a friendly PAINBOY unit, each time a melee attack is made by a model in this unit, re-roll a wound roll of 1.',
				'Dakkaladz: Each time a model in this unit makes an attack with a Dakka weapon against an enemy INFANTRY unit, if a hit is scored, that enemy unit cannot fire Overwatch this turn.',
				'Ded Keen: This unit is eligible to perform Heroic Interventions as if it were a CHARACTER.',
				'Opportunistic: Each time an enemy VEHICLE unit is destroyed by a melee attack made by a model in this unit, you gain one additional Scrap point.',
				'Gnarly Scars (Aura): While an enemy unit is within 3" of this unit, subtract 2 from the Leadership characteristic of models in that enemy unit.'
			],
			necNoble: [
				'Hierarchical Advancement: Add 3" to the range of this model\'s My Will Be Done ability.',
				'Martial Apotheosis: Each time an attack is made by this model, re-roll a hit roll of 1.',
				'Endless Legions: If this model is part of your Crusade army and it gained 3 or more experience points from the battle (excluding experience gained from Marked for Greatness). gain 1 Requisition point.'
			],
			necCore: [
				'The Will to Serve: Out of Action tests taken for this unit are automatically passed.',
				'Engrammatic Imprinting: This unit will benefit from the selected directive of your army\'s active command protocol while it is within any range of a friendly NECRONS CHARACTER model (excluding C\'TAN SHARD models). instead of 6".',
				'Undying Revenants: Each time you make Reanimation Protocol rolls for this unit, you can change a single dice result to a 6.'
			],
			necCryptek: [
				'Corporeal Integration: Once per battle, after this model has used its Chronometron, Harbinger of Despair, Harbinger of Destruction or Rites of Reanimation ability, it can use that ability one additional time.',
				'Energy Savant: Once per battle, in your Shooting phase, after this unit has shot, it can shoot again.',
				'Dimensional Emancipation: Improve the Weapon Skill characteristic of this model by 1. Each time this model makes a melee attack, a successful hit roll automatically wounds the target.'
			],
			necCanoptek: [
				'Guardian Constructs: While this unit is within 6" of a friendly CRYPTEK unit, each time a melee attack is made by a model in this unit, re-roll a wound roll of 1.',
				'Optimised Aggressors: You can re-roll Advance rolls and charge rolls made for this unit.',
				'Self-replicator Nodes: Each time you make Reanimation Protocol rolls for this unit, you can change a single dice result to a 6.'
			]
		}
	},
	wt: {
		header:'Weapon Enhancements',
		description:'Each time a unit gains a Weapon Enhancement, you must select one model in that unit (if the unit has a unit champion, such as a Sergeant, you must select that model), then you must select one weapon equipped by that model. You cannot select a weapon that has already been enhanced by this Battle Honour, nor can you select a weapon that is a Relic or a Crusade Relic — such artefacts cannot be modified.',
		options: {
			coreRanged: [
				'Auto-loader: When resolving an attack with this weapon, each unmodified hit roll of 6 scores one additional hit on the target.',
				'Armour Piercing: Improve the weapon’s Armour Penetration characteristic by 1 (e.g. AP 0 becomes AP-1, AP-1 becomes AP-2 and so on).',
				'High Calibre: Add 1 to the weapon’s Strength characteristic.',
				'Improved Sights: When resolving an attack with this weapon, add 1 to the hit roll.',
				'Accelerator: Increase the weapon’s Range characteristic by 6". If the weapon has a minimum Range characteristic, this remains unchanged.',
				'Master-worked: Add 1 to the Weapon’s Damage characteristic.'
			],
			coreMelee: [
				'Heirloom: When resolving an attack with this weapon, each unmodified hit roll of 6 scores one additional hit on the target.',
				'Razor-edged: Improve the weapon’s Armour Penetration characteristic by 1 (e.g. AP 0 becomes AP-1, AP-1 becomes AP-2 and so on).',
				'Brutal: Add 1 to the weapon’s Strength characteristic.',
				'Finely Balanced: When resolving an attack with this weapon, add 1 to the hit roll.',
				'Shredder: When resolving an attack with this weapon, an unmodified wound roll of 4+ is always successful, irrespective of the target’s Toughness characteristic.',
				'Fleshbane: Add 1 to the Weapon’s Damage characteristic.',
			],
			necGauss: [
				'Molecular Vaporiser: If an enemy model is destroyed as a result of an attack made with this weapon, until the end of the turn, that model\'s unit is treated as being at below Half-strength.',
				'Nanopartlculate Disassembler Coils: Each time an attack is made with this weapon, an unmodified hit roll of 6 scores 1 additional hit.',
				'Metailophagic Atomic Decouplers: In your Shooting phase, when the bearer’s unit is selected to shoot, unless the Stratagem has already been used in this phase, you can use the Disintegration Capacitors Stratagem for 0CP.'
			],
			necTesla: [
				'Electromagnetic Overcapacitors: Each time an attack made with this weapon targets a unit within 12", the additional hits scored as a result of this weapon\'s abilities are on an unmodified hit roll of 5+, instead of a 6.',
				'Arcshock Projectors: In your Shooting phase, after you have made attacks with this weapon, unless the Stratagem has already been used this phase you can use the Malevolent Arcing Stratagem for 0CP.',
				'Atmospheric Fulminator Array: Each time an attack is made with this weapon against an AIRCRAFT unit, add 1 to that attack\'s hit roll and wound roll.'
			]
		}
	},
	pf: {
		header:'Psychic Fortitude',
		description:'A unit can have more than one Psychic Fortitude, but it cannot have the same Psychic Fortitude more than once',
		options: {
			core: [
				'Psychic Might: Add 1 to the number of psychic powers this unit can attempt to manifest in your Psychic phase.',
				'Adamantium Will: Add 1 to the number of psychic powers this unit can attempt to deny in your opponents Psychic phase.',
				'Master of Lore: Add 1 to the number of psychic powers this unit knows from one of the disciplines available to them. Write down this new power on the unit’s Crusade card.'
			]
		}
	},
	cr: {
		header:'Crusade Relics',
		description:'A CHARACTER model can have any number of Crusade Relics, but the same Crusade Relic cannot be included in your Order of Battle more than once. A CHARACTER model can have Crusade Relics even if they have other Relics (from a Codex, for example).',
		options: {
			artificer: {
				core: [
					'Artisan Bionics: INFANTRY, CAVALRY or BIKER only. Add 1 to the model’s Strength characteristic. In addition, roll one D6 each time this model loses a wound; on a 5+ that wound is not lost.',
					'Conversion Field: INFANTRY only. This model has a 4+ invulnerable save. In addition, each time you roll an unmodified 6 when making a saving throw for this model, the closest enemy unit within 1" suffers 1 mortal wound.',
					'Frenzon Injector: INFANTRY, CAVALRY, BIKER or MONSTER only. You can re-roll Advance and charge rolls made for this model’s unit. In addition, add 1 to this model’s Attacks characteristic during any turn in which its unit made a charge move, was charged or performed a Heroic Intervention.',
					'Laurels of Victory: If this model is included in your army list for a battle, you receive 2 bonus Command points to use in that battle. However, if this model is destroyed during the battle, you immediately lose 2 Command points.',
					'Master-crafted Armour: Add 1 to armour saving throws made for the bearer. In addition, roll one D6 each time this character suffers a mortal wound; on a 6, that mortal wound is ignored.'
				],
				sm: [
					'Halo lndomitus: The bearer has a 4+ invulnerable save. Each time the bearer would lose a wound as the result of a mortal wound, roll one D6: on a 4+, that wound is not lost.',
					'Adamantine Cuirass: Add 1 to the bearer\'s Wounds and Toughness characteristics.',
					'Astartes Teleportation Transponder: The bearer has the Teleport Strike ability.'
				],
				ba: [
					'Blade of Judgement: Model with power sword, master-crafted power sword, relic blade or executioner relic blade only. This Relic replaces the bearer’s power sword, master-crafted power sword, relic blade or executioner relic blade and has the following profile: "Blade of Judgement" Melee Sx2 AP-3 D3 Abilities: Each time an attack is made with this weapon against a CHARACTER unit, you can re-roll the hit roll.',
					'Decimator: Model with master-crafted auto bolt rifle only. This Relic replaces a master-crafted auto bolt rifle and has the following profile: "Decimator" R24\" A3 S5 AP-1 D2 Abilities: Each time an attack is made with this weapon, that attack automatically hits the target.',
					'Hood of Baal: LIBRARIAN or LIBRARIAN DREADNOUGHT model only. Add 6" to the range of the bearers Psychic Hood ability. Each time a Psychic test is taken for the bearer, you can ignore any or all modifiers to that test.'
				],
				ork: [
					'Bosspole: Add 1 to the bearer’s Leadership characteristic. Each time the bearer destroys an ADEPTUS ASTARTES unit, you can make a note of that unit’s <CHAPTER> keyword. Once the bearer has destroyed enemy units with 3 different <CHAPTER> keywords, that model has the following ability: ’Elmet Rack (Aura): While a friendly <CLAN> unit is within 12" of this model, each time a Combat Attrition test is taken for that unit, ignore any or all modifiers.',
					'Ded ’Ard Armour: INFANTRY or CAVALRY model only. Add 1 to the bearer’s Wounds characteristic. Add 1 to armour saving throws made for the bearer.'
				],
				necron: [
					'Transdimensional Shroud: Each time a ranged attack is made against the bearer, an unmodified wound roll of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have.',
					'Engrammatic Entangler: All Battle Scars this unit has are removed from its Crusade card. Out of Action tests made for the bearer are automatically passed.'
				]
			},
			antiquity: {
				core: [
					'Archeotech Nano-med: INFANTRY only. The first time this model is destroyed, keep it to one side; at the end of the current phase, roll one D6. On a 2+, set this model back up again, as close as possible to its previous position, with D3 wounds remaining.',
					'Blackstone Shard Amulet: This model’s unit can never be targeted or affected by psychic powers in any way, nor can it attempt to manifest any psychic powers or perform any psychic actions.',
					'Dark Age Displacer Belt: INFANTRY only. Instead of making a Normal Move or Falling Back in your Movement phase, this model’s unit can be removed from the battlefield and then set back up on the battlefield, anywhere that is more than 9" from any enemy models.',
					'Xenotech Digital Lasers: This model gains the following weapon: "Xenotech Digital Lasers" R12\" P1 S* AP* D* Abilities: If this weapon hits, the target suffers D3 mortal wounds.'
				],
				sm: [
					'Paragon blade: Model with a power sword, master-crafted power sword, relic blade, xenophase blade or executioner relic blade only. This Relic replaces the model\'s power sword, master-crafted power sword, relic blade, xenophase blade or executioner relic blade and has the following profile: "Paragon Blade" Melee S+2 AP-4 D3',
					'Standard of Righteous Hatred: ANCIENT model only. Each time a friendly model is destroyed and make an attack as a result of the bearer\'s Astartes Banner ability, that attack scores a hit on a hit roll of 2+, irrespective of any modifiers.'
				],
				ba: [
					'Figure of Death: CHAPLAIN model with crozius arcanum only. This Relic replaces a crozius arcanum and has the following profile: "Figure of Death" Melee S+2 AP-2 D2 Abilities: Each time a unit suffers a casualty from an attack made with this weapon, until the end of the turn, subtract 1 from the Leadership characteristic of models in that unit.',
					'Chalice of Baal: SANGUINARY PRIEST model only. Increase the range of this model’s Blood Chalice ability to 9".',
					'The Angel’s Wing: JUMP PACK model only. Enemy models cannot fire Overwatch at the bearer. You can re-roll charge rolls made for the bearer.'
				],
				ork: [
					'Da Souped Up Shokka: Model with a shokk attack gun only. Da Souped Up Shokka replaces the model’s shokk attack gun and has the following profile: "Da Souped-up Shokka" R72\" H2D3 S* AP-5 DD6 Abilities: Blast. Each time this weapon is selected to shoot with, roll 2D6+1 to determine the Strength of all its attacks. If the result is 11+, each successful hit inflicts D3 mortal wounds on the target in addition to any normal damage.',
					'Wazgit’s Kopper Skullkap: WEIRDBOY model only. Each time the bearer manifests a Witchfire psychic power (excluding Smite), if the result of the Psychic test was 10+, after resolving that psychic power, resolve the effects of that psychic power a second time.'
				],
				necron: [
					'Necroexcruciator: The bearer has the following ability: ‘Necroexcruciator (Aura): While a friendly C\'TAN SHARD model is within 12" of this model, add l" to the Move characteristic of that C\'TAN SHARD model and add 1 to the Strength, Toughness and Attacks characteristics of that C\'TAN SHARD model.’'
				]
			},
			legendary: {
				core: [
					'Null-field Disruptor: Invulnerable saves cannot be made against attacks made with this model’s melee weapons.',
					'Vortex Grenade: This model gains the following weapon: "Vortex grenade" R6\" G1 S* AP* D* Abilities: One use only. If this weapon hits, the target suffers 3D3 mortal wounds and you roll one D6 for every other unit within 6" of the target unit (roll before any destroyed models are removed); on a 4+ the unit being rolled for suffers D3 mortal wounds as well.'
				],
				sm: [
					'Vortex Bolts: Model with a bolt weapon only. When you select this Relic, select one bolt weapon the bearer is equipped with. Once per battle, when the bearer shoots with that weapon, you can choose for it to fire a vortex bolt. If you do, you can only make one attack with that weapon, but if it scores a hit, the target suffers D3+3 mortal wounds and the attack sequence ends. In addition, until the end of the battle, subtract 1 from Psychic tests taken for a PSYKER unit hit by a vortex bolt.',
					'Relic of the Primarch: Once per battle, in your Command phase, the bearer can unveil the Relic of the Primarch. If it does so, then until the start of your next Command phase: - Add 1 to the Attacks characteristic of models in <CHAPTER> units (excluding PRIMARCH models) that were within 6" of this model when it unveiled the relic. - Each time a model in a <CHAPTER> unit (excluding PRIMARCH models) that was within 6" of this model when it unveiled the relic makes a melee attack, add 1 to that attack\'s hit roll. If the bearer is destroyed, then after removing it from play, replace it with an additional objective marker to represent the Relic of the Primarch (set it up as close as possible to the centre of the model\'s base before it is removed). You immediately gain the Recover the Relic Agenda (below), in addition to any other Agendas that are being used for this battle: RECOVER THE RELIC: If you control the Relic of the Primarch objective marker at the end of the battle, you can select one unit that is within 3" of that objective marker; that unit gains 3 experience points. If you do not control that objective marker at the end of the battle, then you lose 10 victory points (to a minimum of 0).'
				],
				ba: [
					'The Encarmine Warblade: Model with power sword, master-crafted power sword, relic blade or executioner relic blade only. The Encarmine Warblade replaces the bearer’s power sword, master-crafted power sword, relic blade or executioner relic blade and has the following profile: "The Encarmine Warblade" Melee S+2 AP-4 D3 Abilities: Each time an attack is made with this weapon, on an unmodified wound roll of 6 the target suffers 2 mortal wounds in addition to any normal damage.'
				],
				ork: [
					'Gitstoppa Rounds: Model with a Dakka weapon only. When you select this Relic, select one Dakka weapon the bearer is equipped with. Once per battle, when the bearer shoots with that weapon, you can choose for it to fire a salvo of gitstoppa rounds. If you do so, change the weapon’s type to Dakka 3/2. If an attack made with Gitstoppa Rounds scores a hit, that attack inflicts D3 mortal wounds on the target and the attack sequence ends.',
					'Choppa of da Great Waaagh! INFANTRY or CAVALRY model only. The Choppa of da Great Waaagh! has the following profile: "The Choppa of da Great Waaagh!" Melee Sx3 AP-3 D3 Abilities: In your Command phase, if a Waaagh! has already been called, you can call a Waaagh! again. A new Waaagh! is in effect, starting from Stage 1: Call da Waaagh!.'
				],
				necron: [
					'Tachyon Field Phase Inducer: Select one melee weapon the bearer is equipped with. Each time an attack made with that weapon scores a hit, that attack inflicts 1 mortal wound in addition to any normal damage. When the bearer is destroyed, roll one D6 before removing it from play. On a 2+ it explodes, and each unit within 3" suffers D3 mortal wounds.'
				]
			}
		}
	},
	hr: {
		header:'Honorofics',
		description:'Each CAPTAIN unit can only have a single Honorific, and your Order of Battle cannot include more than one such unit from the same Chapter with the same Honorific. If a CAPTAIN unit from your army is upgraded to be a Chapter Master using the Chapter Command Requisition, that unit loses any Honorific it has (if so, its Crusade points are reduced by 1).',
		options:{
			sm: [
				'1st Captain MASTER OF THE KEEP: Once per battle, if this unit is on the battlefield, when you use an Adeptus Astartes Battle Tactic Stratagem, that Stratagem costs 0 Command points.',
				'2nd Captain MASTER OF THE WATCH: If this unit is part of your Crusade army and you are the Defender, then you start the battle with an additional 2 Command points.',
				'3rd Captain MASTER OF THE ARSENAL: Once per battle, if this unit is on the battlefield, when you use an Adeptus Astartes Wargear Stratagem, that Stratagem costs 0 Command points.',
				'4th Captain MASTER OF THE FLEET: If this unit is on the battlefield, you can use the Orbital Bombardment Stratagem twice during the battle instead of once. While this unit is on the battlefield, each time you use the Orbital Bombardment Stratagem, it costs 1 Command point instead of 3.',
				'5th Captain MASTER OF THE MARCHES If this unit is part of your Crusade army and you are using the Strategic Reserves rule, you can halve the Command point cost required to place units into Strategic Reserves (rounding fractions down).',
				'6th Captain MASTER OF THE RITES: If this unit is part of your Crusade force, then the Warlord Trait Requisition costs 0 Requisition points if the model being given the Warlord Trait is from the same Chapter as this unit.',
				'7th Captain CHIEF VICTUALLER: If this unit is part of your Crusade force, then the Rearm and Resupply Requisition costs 0 Requisition points if the unit selected for that Requisition is from the same Chapter as this unit.',
				'8th Captain LORD EXECUTIONER: If this unit is part of your Crusade army and you are the Attacker, then you start the battle with an additional 2 Command points.',
				'9th Captain MASTER OF RELICS: If this unit is part of your Crusade force, then the Relic Requisition costs 0 Requisition points if the model gaining the Relic is from the same Chapter as this unit.',
				'10th Captain MASTER OF RECRUITS: If this unit is part of your Crusade force, then the Fresh Recruits Requisition costs 0 Requisition points if the unit gaining the Fresh Recruits is from the same Chapter as this unit.'
			],
			ba: [
				'1st Captain SHIELD OF BAAL: Once per battle, if this unit is on the battlefield, you can use one Battle Tactic Stratagem twice during the same phase, instead of only once.',
				'2nd Captain MASTER OF THE WATCH: If this unit is part of your Crusade army and you are the Defender, then you start the battle with an additional 2 Command points.',
				'3rd Captain MASTER OF SACRIFICE: Once per battle, if this unit is on the battlefield, when you use the Angel’s Sacrifice Stratagem, that Stratagem costs 0 Command points. If this unit is part of your Crusade army, then each time a unit from your army fails an Out of Action test, that unit loses 1 Flaw point (to a minimum of 0).',
				'4th Captain LORD ADJUDICATOR: Once per battle, if this unit is on the battlefield, when you use an Epic Deed Stratagem, that Stratagem costs 0 Command points.',
				'5th Captain MASTER OF THE MARCHES If this unit is part of your Crusade army and you are using the Strategic Reserves rule, you can halve the Command point cost required to place units into Strategic Reserves (rounding fractions down).',
				'6th Captain CALLER OF THE FIRES: Once per battle, if this unit is on the battlefield, when you use the Red Rampage Stratagem, that Stratagem costs 0 Command points. If this unit is part of your Crusade army, then after each battle, each time you take a Black Rage test for a unit from your army, you can add 1 to the result.',
				'7th Captain LORD OF SKYFALL: Once per battle, if this unit is on the battlefield, when you use either the Descent of Angels or Upon Wings of Fire Stratagem, that Stratagem costs 0 Command points. If this unit is part of your Crusade force, then the Rearm and Resupply and Repair and Recuperate Requisitions cost 0 Requisition points, but only if they are used on an AIRCRAFT unit from the same Chapter as this unit.',
				'8th Captain LORD EXECUTIONER: If this unit is part of your Crusade army and you are the Attacker, then you start the battle with an additional 2 Command points.',
				'9th Captain MASTER OF SIEGES: If this unit is part of your Crusade army and you are the Attacker, then you start the battle with an additional D3 Command points (if your opponents army includes any units with the Fortifications Battlefield Role, you start the battle with an additional 3 Command points instead).',
				'10th Captain MASTER OF RECRUITS: If this unit is part of your Crusade force, then the Fresh Recruits Requisition costs 0 Requisition points if the unit gaining the Fresh Recruits is from the same Chapter as this unit.'
			]
		}
	}
}