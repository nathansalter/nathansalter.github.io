var app = new Vue({
	el:'#app',
	data: {
		faction:'',
		unitType:'',
		isPsyker:'',
		characterRank:'',
		machineSpirit:'',
		SMSpecialist:'',
		squigCavalry:'',
		orkOddboy:'',
		mobUnit:'',
		necronOfficer:'',
		canoptekUnit:'',
		coreNecronUnit:'',
		selectHonour:'',
		weaponType:'',
		necronWeapon:'',
		displayHeader:'',
		displayParagraph:'',
		displayList:[]
	},
	computed: {
		whatRank: function(){
			if(this.unitType === 'Character' && this.selectHonour === 'Crusade Relics'){
				return true
			}else{
				this.characterRank = '';
				return false;
			}
		},
		isMachineSpirit: function(){
			if(this.unitType === 'Vehicle' && (this.faction == 'Imperial Fists' || this.faction == 'Blood Angels')){
				return true
			}else{
				this.machineSpirit = '';
				return false;
			}
		},
		isSMSpecialist: function(){
			if(this.unitType === 'Character' && (this.faction == 'Imperial Fists' || this.faction == 'Blood Angels')){
				return true
			}else{
				this.SMSpecialist = '';
				return false;
			}
		},
		isSquigCavalry: function(){
			if(this.faction == 'Orks' && (this.unitType === 'Character' || this.unitType === 'Other')){
				return true
			}else{
				this.squigCavalry = '';
				return false;
			}
		},
		isOrkOddboy: function(){
			if(this.unitType === 'Character' && this.faction == 'Orks'){
				return true
			}else{
				this.orkOddboy = '';
				return false;
			}
		},
		isMobUnit: function(){
			if(this.faction == 'Orks' && this.unitType === 'Other'){
				return true
			}else{
				this.mobUnit = '';
				return false;
			}
		},
		isNecronOfficer: function(){
			if(this.unitType === 'Character' && this.faction == 'Necron'){
				return true
			}else{
				this.necronOfficer = '';
				return false;
			}
		},
		isCanoptekUnit: function(){
			if(this.faction == 'Necron' && (this.unitType === 'Monster' || this.unitType === 'Other')){
				return true
			}else{
				this.canoptekUnit = '';
				return false;
			}
		},
		isCoreNecronUnit: function(){
			if(this.faction == 'Necron' && this.unitType === 'Other'){
				return true;
			}else{
				this.coreNecronUnit = '';
				return false;
			}
		},
		isPsychicFortitude: function(){
			if(this.isPsyker === 'Yes'){
				return true;
			}else{
				return false;
			}
		},
		isCrusadeRelics: function(){
			if(this.unitType === 'Character'){
				return true;
			}else{
				if(this.selectHonour === 'Crusade Relics'){
					this.selectHonour = '';
				}
				return false;
			}
		},
		isHonorifics: function(){
			if(this.SMSpecialist === 'Captain'){
				return true;
			}else{
				if(this.selectHonour === 'Honorifics'){
					this.selectHonour = '';
				}
				return false;
			}
		},
		whatWeaponType: function(){
			if(this.selectHonour === 'Weapon Enhancements'){
				return true;
			}else{
				if(this.weaponType !== ''){
					this.weaponType = '';
				}
				return false;
			}
		},
		isNecronWeapon: function(){
			if(this.faction === 'Necron' && this.selectHonour === 'Weapon Enhancements' && (this.weaponType === 'Ranged' || this.weaponType === 'Both')){
				return true;
			}else{
				if(this.necronWeapon !== ''){
					this.necronWeapon = '';
				}
				return false;
			}
		},
		optionsMet: function(){
			if(this.selectHonour !== '' && this.unitType !== '' && this.faction !== ''){
				return true;
			}else{
				return false;
			}
		},
	},
	methods:{
		displayHonours: function(){
			if(this.selectHonour === 'Battle Traits'){
				this.displayHeader = database.bt.header;
				this.displayParagraph = database.bt.description;
				
				if(this.unitType === 'Character'){
					this.displayList.push(...database.bt.options.coreCharacter);
					if(this.SMSpecialist === 'Techmarine'){
						this.displayList.push(...database.bt.options.smTechmarine);
					}else if(this.SMSpecialist === 'Apothecary'){
						this.displayList.push(...database.bt.options.smApothecary);
					}else if(this.orkOddboy === 'Mek/Big Mek'){
						this.displayList.push(...database.bt.options.orkBigMek);
					}else if(this.orkOddboy === 'Painboy'){
						this.displayList.push(...database.bt.options.orkPainboy);
					}else if(this.necronOfficer === 'Noble'){
						this.displayList.push(...database.bt.options.necNoble);
					}else if(this.necronOfficer === 'Cryptek'){
						this.displayList.push(...database.bt.options.necCryptek);
					}else if(this.squigCavalry === 'Yes'){
						this.displayList.push(...database.bt.options.orkSquigCavalry);
					}
					
				}else if(this.unitType === 'Vehicle'){
					this.displayList.push(...database.bt.options.coreVehicle);
					if(this.machineSpirit === 'Yes'){
						this.displayList.push(...database.bt.options.smMachineSpirit);
					}

				}else if(this.unitType === 'Monster'){
					this.displayList.push(...database.bt.options.coreMonster);
					if(this.canoptekUnit === 'Yes'){
						this.displayList.push(...database.bt.options.necCanoptek);
					}

				}else if(this.unitType === 'Other'){
					this.displayList.push(...database.bt.options.coreOther);
					if(this.canoptekUnit === 'Yes'){
						this.displayList.push(...database.bt.options.necCanoptek);
					}else if(this.squigCavalry === 'Yes'){
						this.displayList.push(...database.bt.options.orkSquigCavalry);
					}else if(this.mobUnit === 'Yes'){
						this.displayList.push(...database.bt.options.orkMobUnit);
					}else if(this.coreNecronUnit === 'Yes'){
						this.displayList.push(...database.bt.options.necCore);
					}
				}
				
				if((this.faction === 'Imperial Fists' || this.faction === 'Blood Angels') && this.unitType !== 'Vehicle'){
					this.displayList.push(...database.bt.options.smAstartes);
				}

			
			}else if(this.selectHonour === 'Weapon Enhancements'){
				this.displayHeader = database.wt.header;
				this.displayParagraph = database.wt.description;
				
				if(this.weaponType === 'Melee' || this.weaponType === 'Both'){
					this.displayList.push(...database.wt.options.coreMelee);
				}else if(this.weaponType === 'Ranged'){
					this.displayList.push(...database.wt.options.coreRanged);
				}
				if(this.necronWeapon === 'Gauss'){
					this.displayList.push(...database.wt.options.necGauss);
				}else if(this.necronWeapon === 'Tesla'){
					this.displayList.push(...database.wt.options.necTesla);
				}
			
			}else if(this.selectHonour === 'Psychic Fortitudes'){
				this.displayHeader = database.pf.header;
				this.displayParagraph = database.pf.description;
				
				this.displayList.push(...database.pf.options.core);
			
			}else if(this.selectHonour === 'Crusade Relics'){
				this.displayHeader = database.cr.header;
				this.displayParagraph = database.cr.description;

				this.displayList.push(...database.cr.options.artificer.core);
				if(this.faction === 'Imperial Fists'){
					this.displayList.push(...database.cr.options.artificer.sm);
				}else if(this.faction === 'Blood Angels'){
					this.displayList.push(...database.cr.options.artificer.sm);
					this.displayList.push(...database.cr.options.artificer.ba);
				}else if(this.faction === 'Orks'){
					this.displayList.push(...database.cr.options.artificer.ork);
				}else if(this.faction === 'Necrons'){
					this.displayList.push(...database.cr.options.artificer.necron);
				}

				if(this.characterRank === 'Heroic' || this.characterRank === 'Legendary'){
					this.displayList.push(...database.cr.options.antiquity.core);
					if(this.faction === 'Imperial Fists'){
						this.displayList.push(...database.cr.options.antiquity.sm);
					}else if(this.faction === 'Blood Angels'){
						this.displayList.push(...database.cr.options.antiquity.sm);
						this.displayList.push(...database.cr.options.antiquity.ba);
					}else if(this.faction === 'Orks'){
						this.displayList.push(...database.cr.options.antiquity.ork);
					}else if(this.faction === 'Necrons'){
						this.displayList.push(...database.cr.options.antiquity.necron);
					}
				}

				if(this.characterRank === 'Legendary'){
					this.displayList.push(...database.cr.options.legendary.core);
					if(this.faction === 'Imperial Fists'){
						this.displayList.push(...database.cr.options.legendary.sm);
					}else if(this.faction === 'Blood Angels'){
						this.displayList.push(...database.cr.options.antiquity.sm);
						this.displayList.push(...database.cr.options.legendary.ba);
					}else if(this.faction === 'Orks'){
						this.displayList.push(...database.cr.options.legendary.ork);
					}else if(this.faction === 'Necrons'){
						this.displayList.push(...database.cr.options.legendary.necron);
					}
				}
			
			}else if(this.selectHonour === 'Honorifics'){
				this.displayHeader = database.hr.header;
				this.displayParagraph = database.hr.description;

				if(this.faction === 'Imperial Fists'){
					this.displayList.push(...database.hr.options.sm);
				}else if(this.faction === 'Blood Angels'){
					this.displayList.push(...database.hr.options.ba);
				}
			
			}else{
				this.displayHeader = "SOMETHING WRONG! HIT F5!"
			
			}
		},
		clearDisplay: function(){
			this.displayHeader = '';
			this.displayParagraph = '';
			this.displayList = [];
		}
	}
})