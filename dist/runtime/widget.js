System.register(["jimu-core","jimu-core/react"],(function(e,s){var r={},n={};return{setters:[function(e){r.React=e.React,r.SessionManager=e.SessionManager,r.css=e.css,r.jsx=e.jsx},function(e){n.Fragment=e.Fragment,n.useCallback=e.useCallback,n.useState=e.useState}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=r},972:e=>{"use strict";e.exports=n}},s={};function a(r){var n=s[r];if(void 0!==n)return n.exports;var o=s[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.d=(e,s)=>{for(var r in s)a.o(s,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},a.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var o={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(o),a.d(o,{__set_webpack_public_path__:()=>B,default:()=>H});var e=a(244),s=a(972),r=function(e,s,r,n){return new(r||(r=Promise))((function(a,o){function t(e){try{l(n.next(e))}catch(e){o(e)}}function i(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var s;e.done?a(e.value):(s=e.value,s instanceof r?s:new r((function(e){e(s)}))).then(t,i)}l((n=n.apply(e,s||[])).next())}))};const n=["COMANDANTE GENERAL","COMANDANTE MAYOR","COMANDANTE PRINCIPAL","COMANDANTE","SEGUNDO COMANDANTE","PRIMER ALF\xc9REZ","ALF\xc9REZ","SUBALF\xc9REZ","SUBOFICIAL MAYOR","SUBOFICIAL PRINCIPAL","SARGENTO AYUDANTE","SARGENTO PRIMERO","SARGENTO","CABO PRIMERO","CABO","GENDARME"],t=["MASCULINO","FEMENINO","OTRO"],i=["ACTIVIDAD","BAJA","DISPONIBILIDAD","PASIVA","RETIRO"],l=["ADI","APT","APT","AUS","CLE","CLE","CMP","COM","GRL","GRL","JUS","RCL","SAN"],c=["AAD","AAM","ABO","ACR","ADI","ANT","AOP","APO","ARQ","ASI","ATE","AVE","AXT","BIO","CEC","CLE","CMO","COM","CON","CPN","CPU","CRI","DIN","DTX","EDF","ENF","ESC","FAR","GEO","IAA","IAG","ICI","IEL","IEM","IIN","IME","IND","INS","INT","IPR","IQU","ISE","ISI","ISO","ITL","KIF","KIN","LAD","LAM","LAN","LAP","LBI","LCA","LCB","LCE","LCI","LCO","LCR","LCS","LDC","LDG","LDI","LDT","LEC","LED","LEE","LES","LFI","LFN","LFO","LFS","LGA","LGD","LGE","LGR","LHE","LHI","LHS","LIB","LIN","LLO","LNU","LOC","LPD","LPE","LQU","LRE","LRH","LRI","LRL","LRP","LSI","LTS","LTU","MAR","MAU","MAV","MED","MIN","MLA","MMT","MUS","ODO","OSC","PAD","PDG","PDR","PFP","PHI","PMA","PPA","PSI","PYR","SEG","SES","SOC","SVI","TAE","TCA","TEC","TEF","TEL","THE","TIQ","TLA","TRA","TRO","TRS","TTA","TUM","VET"],d=["CASADO","DIVORCIADO","SOLTERO","UNI\xd3N CONVIVENCIAL","VIUDO"],A=["AAC","AAD","AAM","AAP","ABO","ADC","ADE","ADI","ADR","AEN","AGC","AIF","AIT","AMO","ANT","AOC","APC","APE","API","APO","APR","ARQ","ASI","ASO","ASPC","ASV","ATE","ATUADM","ATUCIN","ATUCOM","ATUCRI","ATUSEG","ATUSVI","AVE","AXLC","AXMC","AXPR","BAC","BGF","BIO","CAC","CAI","CAM","CAR","CDI","CHA","CLE","CMO","COC","COM","CON","CPN","CPU","CRI","CTA","DAD","DER","DGR","DIN","DMU","DTX","DWM","EDF","EGE","EIN","EME","END","ENP","ENU","ESC","EVH","FAR","FDT","GCA","GEO","GHL","GRA","GRL","GSE","IAA","IAG","ICB","ICI","ICIA","ICR","IEL","IEM","IES","IIN","IJU","ILA","IME","IND","INF","INS","INT","IPR","IQU","ISE","ISI","ISO","ITL","KIN","LAD","LAM","LAN","LAP","LBI","LCA","LCB","LCE","LCI","LCO","LCR","LCS","LDC","LDG","LDI","LDT","LEC","LED","LEE","LEF","LES","LFI","LFN","LFO","LFS","LGA","LGD","LGE","LGR","LHE","LHI","LHS","LIB","LIN","LKF","LKI","LLO","LNU","LOC","LPD","LPE","LPG","LPS","LQU","LRE","LRH","LRI","LRL","LRP","LSI","LTS","LTU","MAD","MAI","MAN","MAR","MAU","MAV","MBA","MCA","MCI","MCL","MCO","MDE","MDI","MED","MEE","MEF","MEM","MFA","MFL","MGA","MGC","MGE","MGI","MIN","MLA","MLB","MLE","MMA","MMD","MMO","MMT","MOB","MOF","MON","MOS","MOT","MPC","MPE","MPQ","MPU","MRA","MRE","MRH","MTE","MTR","MUS","NEU","OAM","OBS","ODC","ODO","OFI","OMO","ONC","OPT","OSC","OUR","PAD","PAS","PDG","PDR","PEF","PER","PFA","PFP","PGA","PHI","PMA","POD","PPA","RAD","SAS","SEG","SEPUB","SMB","SOC","TAB","TAD","TAE","TAG","TAL","TAV","TCA","TCD","TCE","TCI","TCO","TCP","TCR","TDG","TDI","TDT","TEA","TEEM","TEF","TEG","TEL","TEM","TEV","TGR","THE","THP","TIN","TIQ","TIS","TIV","TLA","TMA","TPR","TQU","TRA","TRD","TRE","TRF","TRH","TRO","TRS","TSAP","TSB","TSG","TSH","TSICN","TSO","TSPC","TSSLAC","TSSP","TSSVT","TSTC","TTA","TUM","TUSPCADM","TUSPCCRI","TUSPCGC","TUSPCSV","TUSPYC","TUSPYCICN","URO","VET","ZAP"],I=["APERCIBIMIENTO","FALTA LEVE","FALTA GRAVE","FALTA GRAV\xcdSIMA"],E=["SI","NO"],C=["ESPOSO/A","PADRE","MADRE","SUEGRO/A","HIJO/A","YERNO","NUERA","ABUELO/A","NIETO/O","HERMANO/A","CU\xd1ADO/A","BISABUELO/A","BIZNIETO/A","T\xcdO/A","SOBRINO/A"],p=["ESCRIBAIRES","UNICRICAMAY","UNICRIROS","UNICRICOR","UNICRIMARCA","UNICRISANTERO","UNICRIENRIOS","UNICRICHACO","UNICRIFOR","UNICRIMIS","UNICRIGUAZU","UNICRICORRIE","UNICRIJUY","UNICRILAQ","UNICRISAL","UNICRIGUAYCHU","UNICRITUC","UNICRIJUAN","UNICRIMEN","UNICRICHUB","UNICRILLRGOS","UNICRISHUAIA","UNICRINEU","SECRIBAR"],f=["LAECO","LES ASUNTOS FAMILIARES","LES CAMBIO DE DESTINO","LES NACIMIENTO DE HIJO CON DISCAPACIDADES PSICO-MOTORAS","LES P/ ENF","LES POR ADOPCI\xd3N","LES POR ASISTENCIA A EVENTOS DE INTER\xc9S INSTITUCIONAL","LES POR DONAR SANGRE","LES POR DUELO","LES POR MATERNIDAD","LES POR MATRIMONIO","LES POR NACIMIENTO","LES POR PRESTACI\xd3N DE SERVICIO EN EL EXTERIOR","LES POR RENDIR EX\xc1MENES"],x=["APTITUD DE INTELIGENCIA CRIMINAL PARA GENDARMES","APTITUD EN INTELIGENCIA CRIMINAL PARA PROFESIONALES","APTITUD EN INTELIGENCIA CRIMINAL PARA SUBALFERECES (NIVEL T\xc1CTICO)","APTITUD EN INTELIGENCIA CRIMINAL PARA SUBOFICIALES","AUXILIAR EN INTELIGENCIA PARA GENDARMES","B\xc1SICO AUXILIAR DE INTELIGENCIA (EJ\xc9RCITO ARGENTINO)","B\xc1SICO DE INTELIGENCIA (EJ\xc9RCITO ARGENTINO)","CAPACITACI\xd3N EN INTELIGENCIA PARA PERSONAL SUPERIOR DE GNA (ARA)","B\xc1SICO DE INTELIGENCIA CRIMINAL (ESID-DNIC)","FORMACI\xd3N B\xc1SICA - AUXILIAR OPERATIVO APTITUD INTELIGENCIA (AUX OP ICIA)","DIRECCI\xd3N DE INTELIGENCIA ESTRAT\xc9GICA MILITAR - DIEM (EA)","MEDIOS DE REUNI\xd3N DE INFORMACI\xd3N (MRI)","OFICIAL DE INTELIGENCIA DE GENDARMER\xcdA NACIONAL","OFICIAL DE INTELIGENCIA DE LA ARMADA ARGENTINA","OFICIAL DE INTELIGENCIA DE LA FUERZA A\xc9REA","OFICIAL DE PLANA MAYOR - APTITUD INTELIGENCIA","T\xc9CNICO EN AUXILIAR DE INTELIGENCIA DE GENDARMER\xcdA (TAI / TAIGEN)","T\xc9CNICO SUPERIOR EN INVESTIGACI\xd3N CRIMINAL (TSICN)"],b=["TOTAL","PARCIAL"],u=", ",g={GRADO:"",APELLIDO:"",NOMBRES:"",DNI:"",CE:"",GENERO:"",DIR_RESIDENCIA:"",FECHA_NAC:"",LUGAR_NAC:"",ESTADO_CIVIL:"",POC:"",CEL_PART:"",CEL_ALT:"",EMAIL_INST:"",EMAIL_PART:"",CYG_PROPIA_FUERZA:"",CYG_GRADO:"",CYG_APELLIDO:"",CYG_DNI:"",CYG_UNIDAD:"",CYG_APT_ICIA:"",CYG_OTRA_APT:"",CYG_OTRA_FUERZA:"",HIJOS:"",CANT_HIJOS:"",FAM_SIT_ESP:"",FAM_SIT_PARENT:"",FAM_SIT_DIAG:"",FAM_CARGO:"",FAM_CARGO_PAR:"",FAM_CONVIVEN:"",FAM_CONVIVEN_PAR:"",CARGO:"",UNIDAD_REVISTA:"",ESCALAFON:"",ESPECIALIDAD:"",APTITUD:"",CURSO_ICIA:"",CURSOS:"",FECHA_INCORP_ESP:"",DESTINOS:"",COMISION_EXT:"",DONDE_COMISION:"",CAUSAS_JUD:"",DET_CAUSAS:"",CASO_GENERO:"",DET_CASO_GEN:"",SITUACION:"",RESTR_ARMAMENTO:"",RESTR_DESDE:"",RESTR_TIPO:"",TIPO_SANCION:"",DET_SANCION:"",LAO_DESDE:"",LAO_HASTA:"",LEX_DESDE:"",LEX_HASTA:"",LIC_ESPECIALES:"",LICENCIAS_ESP_DESDE:"",LICENCIAS_ESP_HASTA:"",TRAMITE_RETIRO:"",ART_DESDE:"",ART_HASTA:"",DAF_DESDE:"",LACTANCIA_DESDE:"",GRAVIDEZ_DESDE:"",FECHA_PARTO:"",AGR_OTRA_UNIDAD:"",AGR_OTRA_DONDE:"",AGR_OTRA_FIN:"",AGR_MTO:"",AGR_ESTA_UNIDAD:"",AGR_ESTA_PERTENENCIA:"",AGR_ESTA_FIN:"",NRO_EXPEDIENTE:"",SOL_CAMBIO_DEST:"",SOL_ESTADO:"",SOL_FECHA:"",SAN_NRO_ACTUACION:"",SAN_FECHA_INI:"",SAN_FECHA_CIE:"",SAN_DIAGNOSTICO:"",SAN_ULT_DILIG:"",ADM_NRO_EXPTE:"",ADM_FECHA_INI:"",ADM_FECHA_CIE:"",ADM_CARATULA:"",ADM_ULT_DILIG:"",DISC_NRO_EXPTE:"",DISC_FECHA_INI:"",DISC_FECHA_CIE:"",DISC_CARATULA:"",DISC_ULT_DILIG:"",FOTO:"",TIEMPO_DE_PERMANENCIA:""},R={san:[],adm:[],disc:[]},O=["nro","ini","cie","det","dil"],S={san:{nro:"SAN_NRO_ACTUACION",ini:"SAN_FECHA_INI",cie:"SAN_FECHA_CIE",det:"SAN_DIAGNOSTICO",dil:"SAN_ULT_DILIG",nroLabel:"Nro",detLabel:"Dx"},adm:{nro:"ADM_NRO_EXPTE",ini:"ADM_FECHA_INI",cie:"ADM_FECHA_CIE",det:"ADM_CARATULA",dil:"ADM_ULT_DILIG",nroLabel:"Nro expte",detLabel:"Car\xe1tula"},disc:{nro:"DISC_NRO_EXPTE",ini:"DISC_FECHA_INI",cie:"DISC_FECHA_CIE",det:"DISC_CARATULA",dil:"DISC_ULT_DILIG",nroLabel:"Nro expte",detLabel:"Car\xe1tula"}},N=e=>!Object.values(e).some((e=>!!e&&""!==e.trim())),T=(e,s,r)=>[e.nro&&`${s}: ${e.nro}`,e.ini&&`Inicio: ${e.ini}`,e.cie&&`Cierre: ${e.cie}`,e.det&&`${r}: ${e.det}`,e.dil&&`\xdaltima diligencia: ${e.dil}`].filter(Boolean).join(" | "),L={art:[],daf:[],lact:[],grav:[]},_={art:{ini:"ART_DESDE",fin:"ART_HASTA",label:"ART"},daf:{ini:"DAF_DESDE",label:"DAF"},lact:{ini:"LACTANCIA_DESDE",label:"Lactancia"},grav:{ini:"GRAVIDEZ_DESDE",label:"Gravidez"}},D=e=>!e.ini.trim()&&!e.fin.trim(),j=e=>{const s=e.ini.trim(),r=e.fin.trim();return s&&r?`${s} a ${r}`:s||r},h={widget:e.css`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap');

    --bg-primary:     #f8fafc;
    --bg-secondary:   #f1f5f9;
    --bg-card:        #ffffff;
    --bg-hover:       #edf2f7;
    --border:         #cbd5e1;
    --border-accent:  #94a3b8;
    --brand-blue:     #1e3a8a;
    --brand-blue-light:#2563eb;
    --brand-blue-dark: #172554;
    --text-primary:   #1e293b;
    --text-secondary: #475569;
    --text-muted:     #64748b;

    * { box-sizing: border-box; margin: 0; padding: 0; }

    font-family: 'Inter', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    & ::-webkit-scrollbar { width: 6px; }
    & ::-webkit-scrollbar-track { background: var(--bg-secondary); }
    & ::-webkit-scrollbar-thumb { background: var(--border-accent); border-radius: 3px; }
  `,header:e.css`
    background: #ffffff;
    border-bottom: 3px solid var(--brand-blue);
    padding: 14px 20px;
    display: flex; align-items: center; gap: 14px;
    flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  `,hicon:e.css`
    width: 44px; height: 44px; flex-shrink: 0;
    background: var(--brand-blue);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
    color: #ffffff; letter-spacing: 0.5px;
  `,htitle:e.css`
    font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700;
    letter-spacing: 0.5px; color: var(--brand-blue-dark);
    margin: 0;
  `,hsub:e.css`
    font-size: 12px; color: var(--text-muted); letter-spacing: 0.5px;
    font-family: 'Roboto', sans-serif; font-weight: 400;
    margin-top: 2px;
  `,tabs:e.css`
    display: flex;
    background: #ffffff;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    overflow-x: auto;
    padding: 0 10px;
  `,tab:e.css`
    flex: 1;
    text-align: center;
    padding: 14px 10px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.3px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all .2s;
    border-bottom: 3px solid transparent;
    outline: none;
    white-space: nowrap;
    &:hover {
      color: var(--brand-blue-light);
      background: var(--bg-primary);
    }
  `,tabActive:e.css`
    color: var(--brand-blue-light) !important;
    border-bottom-color: var(--brand-blue-light) !important;
    background: rgba(37, 99, 235, 0.04);
  `,tabErr:e.css`
    color: #dc2626 !important;
    border-bottom-color: #dc2626 !important;
  `,tabBadge:e.css`
    display: inline-block;
    background: #dc2626;
    color: #fff;
    border-radius: 4px;
    padding: 1px 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    font-weight: 700;
    margin-left: 6px;
  `,body:e.css`
    flex: 1;
    overflow-y: auto;
    padding: 20px 24px;
    position: relative;
  `,sec:e.css`
    margin-bottom: 20px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    overflow: hidden;
  `,secH:e.css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-secondary);
    border: none;
    border-bottom: 1px solid var(--border);
    padding: 12px 16px;
    color: var(--brand-blue-dark);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: default;
    outline: none;
  `,secB:e.css`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: #ffffff;
  `,g2:e.css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    @media(max-width:600px){ grid-template-columns: 1fr; }
  `,g3:e.css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    @media(max-width:700px){ grid-template-columns: 1fr; }
  `,field:e.css`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `,label:e.css`
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-secondary);
  `,req:e.css`
    color: #dc2626;
    margin-left: 3px;
  `,input:e.css`
    width: 100%;
    background: #ffffff;
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 9px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 400;
    outline: none;
    transition: all .2s;
    border-radius: 4px;
    box-sizing: border-box;
    &:focus { border-color: var(--brand-blue-light); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
    &::placeholder { color: var(--text-muted); opacity: 0.6; }
  `,inputErr:e.css`
    border-color: #dc2626 !important;
    &:focus { box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important; }
  `,select:e.css`
    width: 100%;
    background: #ffffff;
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 9px 32px 9px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 400;
    outline: none;
    transition: all .2s;
    border-radius: 4px;
    cursor: pointer;
    -webkit-appearance: none;
    box-sizing: border-box;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23475569' d='M6 8.5L2 4.5h8z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    &:focus { border-color: var(--brand-blue-light); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
  `,textarea:e.css`
    width: 100%;
    background: #ffffff;
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 9px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 400;
    outline: none;
    transition: all .2s;
    border-radius: 4px;
    resize: vertical;
    min-height: 80px;
    box-sizing: border-box;
    &:focus { border-color: var(--brand-blue-light); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
    &::placeholder { color: var(--text-muted); opacity: 0.6; }
  `,err:e.css`
    color: #dc2626;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    margin: 2px 0 0 0;
  `,hint:e.css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: var(--text-muted);
    margin: 2px 0 0 0;
  `,note:e.css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: var(--brand-blue);
    margin-top: 6px;
    border-bottom: 1px solid var(--bg-secondary);
    padding-bottom: 4px;
  `,fotoContainer:e.css`
    display: flex;
    gap: 16px;
    align-items: center;
    background: var(--bg-secondary);
    border: 1px dashed var(--border-accent);
    padding: 14px;
    border-radius: 4px;
  `,fotoPrevImg:e.css`
    width: 72px;
    height: 72px;
    border: 1px solid var(--border);
    border-radius: 4px;
    object-fit: cover;
    background: #ffffff;
  `,fotoNoneIcon:e.css`
    width: 72px;
    height: 72px;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: var(--text-muted);
  `,fotoFileInput:e.css`
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: var(--text-secondary);
    &::file-selector-button {
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 12px;
      background: #ffffff;
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--text-primary);
      cursor: pointer;
      margin-right: 12px;
      transition: all 0.2s;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    &::file-selector-button:hover {
      border-color: var(--border-accent);
      background: var(--bg-primary);
    }
  `,feedback:e.css`
    position: absolute;
    bottom: 16px;
    left: 24px;
    right: 24px;
    padding: 12px 18px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    z-index: 99;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  `,fbOk:e.css`
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  `,fbErr:e.css`
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  `,footer:e.css`
    background: #ffffff;
    border-top: 1px solid var(--border);
    padding: 14px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    gap: 12px;
    box-shadow: 0 -1px 3px rgba(0,0,0,0.03);
  `,fr:e.css`display: flex; gap: 10px; align-items: center;`,btn:e.css`
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 9px 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .2s;
    white-space: nowrap;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    &:disabled { opacity: .5; cursor: not-allowed; box-shadow: none; }
  `,btnPrimary:e.css`
    background: var(--brand-blue-light);
    color: #ffffff;
    &:hover:not(:disabled){ background: #1d4ed8; }
  `,btnSave:e.css`
    background: #166534;
    color: #ffffff;
    &:hover:not(:disabled){ background: #14532d; }
  `,btnSecond:e.css`
    background: #ffffff;
    border-color: #dc2626;
    color: #dc2626;
    &:hover:not(:disabled){ background: #fef2f2; }
  `,btnGhost:e.css`
    background: #ffffff;
    border-color: var(--border);
    color: var(--text-secondary);
    &:hover:not(:disabled){ background: var(--bg-secondary); color: var(--text-primary); }
  `,msBtn:e.css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    text-align: left;
    background: #ffffff;
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 9px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 400;
    outline: none;
    transition: all .2s;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    &:focus { border-color: var(--brand-blue-light); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
  `,msPanel:e.css`
    border: 1px solid var(--border);
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column;
  `,msSearch:e.css`
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--border);
    padding: 8px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    outline: none;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    &::placeholder { color: var(--text-muted); opacity: 0.6; }
  `,msList:e.css`
    max-height: 220px;
    overflow-y: auto;
  `,msOpt:e.css`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: var(--text-primary);
    cursor: pointer;
    &:hover { background: var(--bg-hover); }
    input { cursor: pointer; }
  `,msEmpty:e.css`
    padding: 10px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: var(--text-muted);
  `,msFoot:e.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 12px;
    border-top: 1px solid var(--border);
    background: var(--bg-secondary);
    border-radius: 0 0 4px 4px;
  `,msLink:e.css`
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: var(--brand-blue-light);
    padding: 2px 4px;
    &:hover { text-decoration: underline; }
  `,msChips:e.css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  `,msChip:e.css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #dbeafe;
    color: var(--brand-blue-dark);
    border-radius: 4px;
    padding: 2px 8px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
  `,msChipX:e.css`
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-weight: 700;
    font-size: 13px;
    line-height: 1;
    padding: 0;
    &:hover { color: #dc2626; }
  `,regList:e.css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,regItem:e.css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 10px 12px;
  `,regTxt:e.css`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: var(--text-primary);
    line-height: 1.5;
    word-break: break-word;
  `,regDel:e.css`
    flex-shrink: 0;
    background: #ffffff;
    border: 1px solid #dc2626;
    color: #dc2626;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    padding: 3px 8px;
    &:hover { background: #fef2f2; }
  `,regAddRow:e.css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  `};function m({label:s,fk:r,fs:n,err:a,onChange:o,type:t="text",placeholder:i="",required:l=!1,hint:c=""}){const d=a[r];return(0,e.jsx)("div",{css:h.field},(0,e.jsx)("label",{css:h.label},s,l&&(0,e.jsx)("span",{css:h.req},"*")),(0,e.jsx)("input",{css:[h.input,d&&h.inputErr],type:t,value:n[r],placeholder:i,onChange:e=>o(r,e.target.value)}),c&&!d&&(0,e.jsx)("p",{css:h.hint},c),d&&(0,e.jsx)("p",{css:h.err},d))}function v({label:s,fk:r,fs:n,err:a,onChange:o,opts:t,required:i=!1,hint:l=""}){const c=a[r];return(0,e.jsx)("div",{css:h.field},(0,e.jsx)("label",{css:h.label},s,i&&(0,e.jsx)("span",{css:h.req},"*")),(0,e.jsx)("select",{css:[h.select,c&&h.inputErr],value:n[r],onChange:e=>o(r,e.target.value)},(0,e.jsx)("option",{value:""},"\u2014 Seleccionar \u2014"),t.map((s=>(0,e.jsx)("option",{key:s,value:s},s)))),l&&!c&&(0,e.jsx)("p",{css:h.hint},l),c&&(0,e.jsx)("p",{css:h.err},c))}function P({label:r,fk:n,fs:a,err:o,onChange:t,opts:i,required:l=!1,hint:c=""}){const d=o[n],[A,I]=(0,s.useState)(!1),[E,C]=(0,s.useState)(""),p=a[n]?a[n].split(u).filter(Boolean):[],f=e=>{t(n,i.filter((s=>e.includes(s))).join(u))},x=e=>{f(p.includes(e)?p.filter((s=>s!==e)):[...p,e])},b=E.trim().toLowerCase(),g=b?i.filter((e=>e.toLowerCase().includes(b))):i;return(0,e.jsx)("div",{css:h.field},(0,e.jsx)("label",{css:h.label},r,l&&(0,e.jsx)("span",{css:h.req},"*")),(0,e.jsx)("button",{type:"button",css:[h.msBtn,d&&h.inputErr],onClick:()=>I((e=>!e))},(0,e.jsx)("span",null,0===p.length?"\u2014 Seleccionar (puede elegir varias) \u2014":`${p.length} seleccionada${p.length>1?"s":""}`),(0,e.jsx)("span",null,A?"\u25b2":"\u25bc")),p.length>0&&(0,e.jsx)("div",{css:h.msChips},p.map((s=>(0,e.jsx)("span",{key:s,css:h.msChip},s,(0,e.jsx)("button",{type:"button",css:h.msChipX,onClick:()=>x(s),title:"Quitar"},"\xd7"))))),A&&(0,e.jsx)("div",{css:h.msPanel},i.length>8&&(0,e.jsx)("input",{css:h.msSearch,type:"text",value:E,placeholder:"Buscar\u2026",onChange:e=>C(e.target.value)}),(0,e.jsx)("div",{css:h.msList},0===g.length&&(0,e.jsx)("div",{css:h.msEmpty},"Sin resultados"),g.map((s=>(0,e.jsx)("label",{key:s,css:h.msOpt},(0,e.jsx)("input",{type:"checkbox",checked:p.includes(s),onChange:()=>x(s)}),(0,e.jsx)("span",null,s))))),(0,e.jsx)("div",{css:h.msFoot},(0,e.jsx)("button",{type:"button",css:h.msLink,onClick:()=>f([])},"Limpiar selecci\xf3n"),(0,e.jsx)("button",{type:"button",css:h.msLink,onClick:()=>{I(!1),C("")}},"Cerrar"))),c&&!d&&(0,e.jsx)("p",{css:h.hint},c),d&&(0,e.jsx)("p",{css:h.err},d))}function M({label:s,fk:r,fs:n,err:a,onChange:o,placeholder:t="",hint:i=""}){const l=a[r];return(0,e.jsx)("div",{css:h.field},(0,e.jsx)("label",{css:h.label},s),(0,e.jsx)("textarea",{css:[h.textarea,l&&h.inputErr],value:n[r],placeholder:t,onChange:e=>o(r,e.target.value)}),i&&!l&&(0,e.jsx)("p",{css:h.hint},i),l&&(0,e.jsx)("p",{css:h.err},l))}function y({items:s,label:r,onRemove:n}){return 0===s.length?null:(0,e.jsx)("div",{css:h.regList},s.map(((s,a)=>(0,e.jsx)("div",{key:a,css:h.regItem},(0,e.jsx)("div",{css:h.regTxt},(0,e.jsx)("strong",null,r," #",a+1)," ",j(s)),(0,e.jsx)("button",{type:"button",css:h.regDel,onClick:()=>n(a),title:"Quitar"},"\u{1f5d1}\ufe0f")))))}function G({items:s,nroLabel:r,detLabel:n,onRemove:a}){return 0===s.length?null:(0,e.jsx)("div",{css:h.regList},s.map(((s,o)=>(0,e.jsx)("div",{key:o,css:h.regItem},(0,e.jsx)("div",{css:h.regTxt},(0,e.jsx)("strong",null,"#",o+1)," ",T(s,r,n)),(0,e.jsx)("button",{type:"button",css:h.regDel,onClick:()=>a(o),title:"Quitar registro"},"\u{1f5d1}\ufe0f")))))}function U({fs:r,err:a,on:o,fotoPreview:i,setFotoPreview:l,setFotoFile:c}){return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f4cb} Identificaci\xf3n"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(v,{label:"Grado",fk:"GRADO",fs:r,err:a,onChange:o,opts:n,required:!0}),(0,e.jsx)(m,{label:"Apellido",fk:"APELLIDO",fs:r,err:a,onChange:o,placeholder:"GARC\xcdA",required:!0}),(0,e.jsx)(m,{label:"Nombres",fk:"NOMBRES",fs:r,err:a,onChange:o,placeholder:"JUAN CARLOS",required:!0})),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(m,{label:"DNI",fk:"DNI",fs:r,err:a,onChange:o,type:"number",placeholder:"28123456",required:!0}),(0,e.jsx)(m,{label:"CE",fk:"CE",fs:r,err:a,onChange:o,type:"number",placeholder:"Ce Sin puntos"}),(0,e.jsx)(v,{label:"G\xe9nero",fk:"GENERO",fs:r,err:a,onChange:o,opts:t,required:!0})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f4f7} Foto"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.fotoContainer},i?(0,e.jsx)("img",{src:i,alt:"Preview",css:h.fotoPrevImg}):(0,e.jsx)("div",{css:h.fotoNoneIcon},"\u{1f464}"),(0,e.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{var s;const r=null===(s=e.target.files)||void 0===s?void 0:s[0];if(!r)return;const n=URL.createObjectURL(r);l((e=>(e&&URL.revokeObjectURL(e),n))),c(r),o("FOTO",r.name)},css:h.fotoFileInput})),r.FOTO&&!i&&(0,e.jsx)("p",{css:h.hint},"Archivo cargado: ",r.FOTO))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f3e0} Datos Personales"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"Fecha de Nacimiento",fk:"FECHA_NAC",fs:r,err:a,onChange:o,type:"date"}),(0,e.jsx)(m,{label:"Lugar de Nacimiento",fk:"LUGAR_NAC",fs:r,err:a,onChange:o,placeholder:"Provincia / Pa\xeds"})),(0,e.jsx)(m,{label:"Direcci\xf3n de Residencia",fk:"DIR_RESIDENCIA",fs:r,err:a,onChange:o,placeholder:"Calle, n\xfamero, localidad, provincia"}),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"Estado Civil",fk:"ESTADO_CIVIL",fs:r,err:a,onChange:o,opts:d})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f4de} Contacto"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(m,{label:"Nro. POC",fk:"POC",fs:r,err:a,onChange:o,type:"number",placeholder:"N\xfamero interno"}),(0,e.jsx)(m,{label:"Celular Particular",fk:"CEL_PART",fs:r,err:a,onChange:o,type:"number",placeholder:"Ej: 1123456789"}),(0,e.jsx)(m,{label:"Celular Alternativo / Emergencia",fk:"CEL_ALT",fs:r,err:a,onChange:o,type:"number",placeholder:"Ej: 1198765432"})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"Correo Institucional",fk:"EMAIL_INST",fs:r,err:a,onChange:o,type:"email",placeholder:"usuario@gendarmeria.gov.ar"}),(0,e.jsx)(m,{label:"Correo Particular",fk:"EMAIL_PART",fs:r,err:a,onChange:o,type:"email",placeholder:"usuario@email.com"})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f48d} Datos del C\xf3nyuge"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfCasado/a con Personal de la Propia Fuerza?",fk:"CYG_PROPIA_FUERZA",fs:r,err:a,onChange:o,opts:E}),(0,e.jsx)(v,{label:"\xbfCasado/a con Personal de Otra Fuerza?",fk:"CYG_OTRA_FUERZA",fs:r,err:a,onChange:o,opts:E})),"SI"===r.CYG_PROPIA_FUERZA&&(0,e.jsx)(s.Fragment,null,(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(v,{label:"Grado del C\xf3nyuge",fk:"CYG_GRADO",fs:r,err:a,onChange:o,opts:n}),(0,e.jsx)(m,{label:"Apellido y Nombre del C\xf3nyuge",fk:"CYG_APELLIDO",fs:r,err:a,onChange:o,placeholder:"Apellido, Nombre"}),(0,e.jsx)(m,{label:"DNI del C\xf3nyuge",fk:"CYG_DNI",fs:r,err:a,onChange:o,type:"number"})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"Unidad de Revista del C\xf3nyuge",fk:"CYG_UNIDAD",fs:r,err:a,onChange:o}),(0,e.jsx)(v,{label:"\xbfC\xf3nyuge posee Aptitud en Inteligencia?",fk:"CYG_APT_ICIA",fs:r,err:a,onChange:o,opts:E})),(0,e.jsx)(m,{label:"Posee otra Aptitud Especial (\xbfcu\xe1l?)",fk:"CYG_OTRA_APT",fs:r,err:a,onChange:o,placeholder:"Describir si corresponde"})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f476} Hijos"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfTiene hijos?",fk:"HIJOS",fs:r,err:a,onChange:o,opts:E}),"SI"===r.HIJOS&&(0,e.jsx)(m,{label:"Cantidad de Hijos",fk:"CANT_HIJOS",fs:r,err:a,onChange:o,type:"number"})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f468}\u200d\u{1f469}\u200d\u{1f467} Familiares"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfFamiliar con Situaci\xf3n Especial?",fk:"FAM_SIT_ESP",fs:r,err:a,onChange:o,opts:E}),"SI"===r.FAM_SIT_ESP&&(0,e.jsx)(P,{label:"Grado de Parentesco",fk:"FAM_SIT_PARENT",fs:r,err:a,onChange:o,opts:C})),"SI"===r.FAM_SIT_ESP&&(0,e.jsx)(M,{label:"Diagn\xf3stico del Familiar",fk:"FAM_SIT_DIAG",fs:r,err:a,onChange:o,placeholder:"Describa la situaci\xf3n"}),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfFamiliares a Cargo?",fk:"FAM_CARGO",fs:r,err:a,onChange:o,opts:E}),"SI"===r.FAM_CARGO&&(0,e.jsx)(P,{label:"Grado de Parentesco",fk:"FAM_CARGO_PAR",fs:r,err:a,onChange:o,opts:C})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfFamiliares que Conviven?",fk:"FAM_CONVIVEN",fs:r,err:a,onChange:o,opts:E}),"SI"===r.FAM_CONVIVEN&&(0,e.jsx)(P,{label:"Grado de Parentesco",fk:"FAM_CONVIVEN_PAR",fs:r,err:a,onChange:o,opts:C})))))}function k({fs:s,err:r,on:n}){return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f3db}\ufe0f Cargo y Destino"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"Cargo",fk:"CARGO",fs:s,err:r,onChange:n,placeholder:"Ej: JEFE DE SECCI\xd3N",required:!0}),(0,e.jsx)(v,{label:"Unidad de Revista",fk:"UNIDAD_REVISTA",fs:s,err:r,onChange:n,opts:p}),(0,e.jsx)(m,{label:"Tiempo de Permanencia",fk:"TIEMPO_DE_PERMANENCIA",fs:s,err:r,onChange:n,placeholder:"5 a\xf1os"})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(M,{label:"Destinos (varios \u2013 indicar fechas)",fk:"DESTINOS",fs:s,err:r,onChange:n,placeholder:"Indique destinos con fecha de inicio",hint:"Separe m\xfaltiples destinos por coma"}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},(0,e.jsx)(v,{label:"\xbfComisi\xf3n al Exterior?",fk:"COMISION_EXT",fs:s,err:r,onChange:n,opts:E}),"SI"===s.COMISION_EXT&&(0,e.jsx)(m,{label:"\xbfD\xf3nde?",fk:"DONDE_COMISION",fs:s,err:r,onChange:n,placeholder:"Pa\xeds, organismo, per\xedodo"}))))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f393} Escalaf\xf3n, Especialidad e Inteligencia"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(v,{label:"Escalaf\xf3n",fk:"ESCALAFON",fs:s,err:r,onChange:n,opts:l}),(0,e.jsx)(P,{label:"Especialidad (c\xf3digo)",fk:"ESPECIALIDAD",fs:s,err:r,onChange:n,opts:c}),(0,e.jsx)(P,{label:"Aptitud",fk:"APTITUD",fs:s,err:r,onChange:n,opts:A})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(P,{label:"Curso de Inteligencia ICIA",fk:"CURSO_ICIA",fs:s,err:r,onChange:n,opts:x}),(0,e.jsx)(m,{label:"Fecha de Incorporaci\xf3n a la Especialidad",fk:"FECHA_INCORP_ESP",fs:s,err:r,onChange:n,type:"date",hint:"Se guarda en el campo de fecha del layer"})),(0,e.jsx)(M,{label:"Cursos Realizados (con fechas de finalizaci\xf3n)",fk:"CURSOS",fs:s,err:r,onChange:n,placeholder:"Liste cada curso y su fecha de finalizaci\xf3n"}))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,(0,e.jsx)("span",null,"\u2696\ufe0f Antecedentes Legales")),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfTiene Causas Judiciales?",fk:"CAUSAS_JUD",fs:s,err:r,onChange:n,opts:E}),"SI"===s.CAUSAS_JUD&&(0,e.jsx)(M,{label:"Detalle de Causas (n\xfamero, juzgado, car\xe1tula)",fk:"DET_CAUSAS",fs:s,err:r,onChange:n,placeholder:"Nro. causa, juzgado, car\xe1tula, etc."})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"\xbfTiene Caso de G\xe9nero?",fk:"CASO_GENERO",fs:s,err:r,onChange:n,opts:E}),"SI"===s.CASO_GENERO&&(0,e.jsx)(M,{label:"Detalle del Caso de G\xe9nero",fk:"DET_CASO_GEN",fs:s,err:r,onChange:n,placeholder:"Nro. actuaci\xf3n, juzgado, datos del caso"})))))}function F({fs:r,err:n,on:a,regs:o,setRegs:t,trams:l,setTrams:c}){const d=e=>{const s=S[e],n={nro:r[s.nro],ini:r[s.ini],cie:r[s.cie],det:r[s.det],dil:r[s.dil]};if(!N(n)){t((s=>Object.assign(Object.assign({},s),{[e]:[...s[e],n]})));for(const e of O)a(s[e],"")}},A=(e,s)=>{t((r=>Object.assign(Object.assign({},r),{[e]:r[e].filter(((e,r)=>r!==s))})))},C=e=>{c((s=>{const n=Object.assign({},s);for(const a of e){const e=_[a],o={ini:r[e.ini],fin:e.fin?r[e.fin]:""};D(o)||(n[a]=[...s[a],o])}return n}));for(const s of e){const e=_[s];a(e.ini,""),e.fin&&a(e.fin,"")}},p=(e,s)=>{c((r=>Object.assign(Object.assign({},r),{[e]:r[e].filter(((e,r)=>r!==s))})))},x='Complete las fechas y presione "Agregar" para cargar m\xe1s de una. Lo que quede escrito al guardar tambi\xe9n se incluye.',u='Complete los campos y presione "Agregar" para cargar m\xe1s de un registro. Lo que quede escrito al guardar tambi\xe9n se incluye.';return(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f4ca} Situaci\xf3n de Revista"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(v,{label:"Situaci\xf3n de Revista",fk:"SITUACION",fs:r,err:n,onChange:a,opts:i,required:!0}),(0,e.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},(0,e.jsx)(v,{label:"\xbfRestricci\xf3n de Armamento?",fk:"RESTR_ARMAMENTO",fs:r,err:n,onChange:a,opts:E}),"SI"===r.RESTR_ARMAMENTO&&(0,e.jsx)(v,{label:"Tipo de Restricci\xf3n",fk:"RESTR_TIPO",fs:r,err:n,onChange:a,opts:b}),"SI"===r.RESTR_ARMAMENTO&&(0,e.jsx)(m,{label:"Desde (Restricci\xf3n)",fk:"RESTR_DESDE",fs:r,err:n,onChange:a,type:"date"}))))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f534} Sanciones"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(P,{label:"Tipo de Sanci\xf3n",fk:"TIPO_SANCION",fs:r,err:n,onChange:a,opts:I}),r.TIPO_SANCION&&(0,e.jsx)(M,{label:"Detalle de Sanciones",fk:"DET_SANCION",fs:r,err:n,onChange:a,placeholder:"N\xfamero de expediente, fechas y descripci\xf3n"})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f4c5} Licencias"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("p",{css:h.note},"LAO \u2013 Licencia Anual Ordinaria"),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"LAO \u2013 Desde",fk:"LAO_DESDE",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"LAO \u2013 Hasta",fk:"LAO_HASTA",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("p",{css:h.note},"LEX \u2013 Licencia Extraordinaria"),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"LEX \u2013 Desde",fk:"LEX_DESDE",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"LEX \u2013 Hasta",fk:"LEX_HASTA",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("p",{css:h.note},"Licencias Especiales"),(0,e.jsx)(P,{label:"Tipo de Licencia Especial",fk:"LIC_ESPECIALES",fs:r,err:n,onChange:a,opts:f}),r.LIC_ESPECIALES&&(0,e.jsx)(s.Fragment,null,(0,e.jsx)(m,{label:"Desde",fk:"LICENCIAS_ESP_DESDE",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Hasta",fk:"LICENCIAS_ESP_HASTA",fs:r,err:n,onChange:a,type:"date"})))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f4dd} Tr\xe1mites Especiales"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)(v,{label:"\xbfPosee Tr\xe1mite de Retiro?",fk:"TRAMITE_RETIRO",fs:r,err:n,onChange:a,opts:E}),(0,e.jsx)("p",{css:h.note},"ART \u2013 Accidente de Trabajo"),(0,e.jsx)(y,{items:l.art,label:"ART",onRemove:e=>p("art",e)}),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(m,{label:"ART \u2013 Desde",fk:"ART_DESDE",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"ART \u2013 Hasta",fk:"ART_HASTA",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("div",{css:h.regAddRow},(0,e.jsx)("button",{type:"button",css:[h.btn,h.btnPrimary],onClick:()=>C(["art"])},"\u2795 Agregar ART"),(0,e.jsx)("p",{css:h.hint},x)),(0,e.jsx)("p",{css:h.note},"DAF / Lactancia / Gravidez"),(0,e.jsx)(y,{items:l.daf,label:"DAF",onRemove:e=>p("daf",e)}),(0,e.jsx)(y,{items:l.lact,label:"Lactancia",onRemove:e=>p("lact",e)}),(0,e.jsx)(y,{items:l.grav,label:"Gravidez",onRemove:e=>p("grav",e)}),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(m,{label:"DAF \u2013 Desde",fk:"DAF_DESDE",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Lactancia \u2013 Desde",fk:"LACTANCIA_DESDE",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Gravidez \u2013 Desde",fk:"GRAVIDEZ_DESDE",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("div",{css:h.regAddRow},(0,e.jsx)("button",{type:"button",css:[h.btn,h.btnPrimary],onClick:()=>C(["daf","lact","grav"])},"\u2795 Agregar DAF / Lactancia / Gravidez"),(0,e.jsx)("p",{css:h.hint},x)),(0,e.jsx)(m,{label:"Fecha Probable de Parto",fk:"FECHA_PARTO",fs:r,err:n,onChange:a,type:"date"}))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f504} Agregaciones"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)("p",{css:h.note},"Agregado a Otra Unidad"),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(v,{label:"\xbfAgregado a Otra Unidad?",fk:"AGR_OTRA_UNIDAD",fs:r,err:n,onChange:a,opts:E}),"SI"===r.AGR_OTRA_UNIDAD&&(0,e.jsx)(s.Fragment,null,(0,e.jsx)(m,{label:"\xbfA qu\xe9 Unidad?",fk:"AGR_OTRA_DONDE",fs:r,err:n,onChange:a,placeholder:"Nombre de la unidad"}),(0,e.jsx)(m,{label:"Fecha de Finalizaci\xf3n",fk:"AGR_OTRA_FIN",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Mediante Mto",fk:"AGR_MTO",fs:r,err:n,onChange:a}))),(0,e.jsx)("p",{css:h.note},"Agregado a la Unidad (desde otra)"),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(v,{label:"\xbfAgregado a la Unidad?",fk:"AGR_ESTA_UNIDAD",fs:r,err:n,onChange:a,opts:E}),"SI"===r.AGR_ESTA_UNIDAD&&(0,e.jsx)(s.Fragment,null,(0,e.jsx)(m,{label:"Unidad de Pertenencia",fk:"AGR_ESTA_PERTENENCIA",fs:r,err:n,onChange:a}),(0,e.jsx)(m,{label:"Fecha de Finalizaci\xf3n",fk:"AGR_ESTA_FIN",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Mediante Mto",fk:"AGR_MTO",fs:r,err:n,onChange:a}))),(0,e.jsx)("p",{css:h.note},"Solicitud por Cambio de Destino"),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(v,{label:"\xbfRealiz\xf3 Solicitud?",fk:"SOL_CAMBIO_DEST",fs:r,err:n,onChange:a,opts:E}),"SI"===r.SOL_CAMBIO_DEST&&(0,e.jsx)(s.Fragment,null,(0,e.jsx)(m,{label:"Estado de la Solicitud",fk:"SOL_ESTADO",fs:r,err:n,onChange:a,placeholder:"En tr\xe1mite / Aprobado\u2026"}),(0,e.jsx)(m,{label:"Fecha de la Solicitud",fk:"SOL_FECHA",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Mediante Nro de Expediente",fk:"NRO_EXPEDIENTE",fs:r,err:n,onChange:a}))))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f3e5} Informaci\xf3n Militar Sanitaria"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)(G,{items:o.san,nroLabel:S.san.nroLabel,detLabel:S.san.detLabel,onRemove:e=>A("san",e)}),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(m,{label:"Nro. Expediente",fk:"SAN_NRO_ACTUACION",fs:r,err:n,onChange:a}),(0,e.jsx)(m,{label:"Fecha de Inicio",fk:"SAN_FECHA_INI",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Fecha de Cierre",fk:"SAN_FECHA_CIE",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(M,{label:"Diagn\xf3stico",fk:"SAN_DIAGNOSTICO",fs:r,err:n,onChange:a,placeholder:"Diagn\xf3stico o descripci\xf3n"}),(0,e.jsx)(M,{label:"\xdaltima Diligencia",fk:"SAN_ULT_DILIG",fs:r,err:n,onChange:a,placeholder:"Descripci\xf3n de la \xfaltima actuaci\xf3n"})),(0,e.jsx)("div",{css:h.regAddRow},(0,e.jsx)("button",{type:"button",css:[h.btn,h.btnPrimary],onClick:()=>d("san")},"\u2795 Agregar registro sanitario"),(0,e.jsx)("p",{css:h.hint},u)))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u{1f5c2}\ufe0f Informaci\xf3n Administrativa"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)(G,{items:o.adm,nroLabel:S.adm.nroLabel,detLabel:S.adm.detLabel,onRemove:e=>A("adm",e)}),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(m,{label:"Nro. Expediente",fk:"ADM_NRO_EXPTE",fs:r,err:n,onChange:a}),(0,e.jsx)(m,{label:"Fecha de Inicio",fk:"ADM_FECHA_INI",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Fecha de Cierre",fk:"ADM_FECHA_CIE",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(M,{label:"Car\xe1tula del Hecho",fk:"ADM_CARATULA",fs:r,err:n,onChange:a,placeholder:"Car\xe1tula del expediente administrativo"}),(0,e.jsx)(M,{label:"\xdaltima Diligencia",fk:"ADM_ULT_DILIG",fs:r,err:n,onChange:a,placeholder:"Descripci\xf3n de la \xfaltima actuaci\xf3n"})),(0,e.jsx)("div",{css:h.regAddRow},(0,e.jsx)("button",{type:"button",css:[h.btn,h.btnPrimary],onClick:()=>d("adm")},"\u2795 Agregar registro administrativo"),(0,e.jsx)("p",{css:h.hint},u)))),(0,e.jsx)("div",{css:h.sec},(0,e.jsx)("button",{type:"button",css:h.secH},(0,e.jsx)("span",null,"\u26a0\ufe0f Informaci\xf3n Disciplinaria"),(0,e.jsx)("span",null,"\u25b2")),(0,e.jsx)("div",{css:h.secB},(0,e.jsx)(G,{items:o.disc,nroLabel:S.disc.nroLabel,detLabel:S.disc.detLabel,onRemove:e=>A("disc",e)}),(0,e.jsx)("div",{css:h.g3},(0,e.jsx)(m,{label:"Nro. Expediente",fk:"DISC_NRO_EXPTE",fs:r,err:n,onChange:a}),(0,e.jsx)(m,{label:"Fecha de Inicio",fk:"DISC_FECHA_INI",fs:r,err:n,onChange:a,type:"date"}),(0,e.jsx)(m,{label:"Fecha de Cierre",fk:"DISC_FECHA_CIE",fs:r,err:n,onChange:a,type:"date"})),(0,e.jsx)("div",{css:h.g2},(0,e.jsx)(M,{label:"Car\xe1tula del Hecho",fk:"DISC_CARATULA",fs:r,err:n,onChange:a,placeholder:"Car\xe1tula del expediente disciplinario"}),(0,e.jsx)(M,{label:"\xdaltima Diligencia",fk:"DISC_ULT_DILIG",fs:r,err:n,onChange:a,placeholder:"Descripci\xf3n de la \xfaltima actuaci\xf3n"})),(0,e.jsx)("div",{css:h.regAddRow},(0,e.jsx)("button",{type:"button",css:[h.btn,h.btnPrimary],onClick:()=>d("disc")},"\u2795 Agregar registro disciplinario"),(0,e.jsx)("p",{css:h.hint},u)))))}function w(e,s,n,a){return r(this,arguments,void 0,(function*(e,s,n,a,o=R,t=L){var i,l,c,d,A,I;const E=e=>e?new Date(`${e}T00:00:00`).getTime():null,C=(e,s)=>{const r=null==e?void 0:e.trim(),n=null==s?void 0:s.trim();return r&&n?`${r} a ${n}`:r||n||null},p=e=>{const r=S[e],n={nro:s[r.nro],ini:s[r.ini],cie:s[r.cie],det:s[r.det],dil:s[r.dil]},a=[...o[e],n].filter((e=>!N(e))),t=a.map(((e,s)=>{const n=((...e)=>e.filter((e=>!!e&&""!==e.trim())).join(" | ")||null)(e.nro&&`${r.nroLabel}: ${e.nro}`,e.ini&&`Inicio: ${e.ini}`,e.cie&&`Cierre: ${e.cie}`,e.det&&`${r.detLabel}: ${e.det}`,e.dil&&`\xdaltima diligencia: ${e.dil}`);return n&&(a.length>1?`[${s+1}] ${n}`:n)})).filter((e=>!!e));return t.join(" || ")||null},f=e=>{const r=_[e],n={ini:s[r.ini],fin:r.fin?s[r.fin]:""};return[...t[e],n].filter((e=>!D(e))).map(j).join(" || ")||null},x={GRADO:s.GRADO||null,APELLIDO:s.APELLIDO||null,NOMBRES:s.NOMBRES||null,DNI:s.DNI||null,CE:s.CE||null,CARGO:s.CARGO||null,UNIDAD_DE_REVISTA:s.UNIDAD_REVISTA||null,GENERO:s.GENERO||null,DIRECCION_DE_RESIDENCIA:s.DIR_RESIDENCIA||null,FECHA_DE_NACIMIENTO:E(s.FECHA_NAC),LUGAR_DE_NACIMIENTO:s.LUGAR_NAC||null,ESCALAFON:s.ESCALAFON||null,ESPECIALIDAD:s.ESPECIALIDAD||null,APTITUD:s.APTITUD||null,CURSO_DE_INTELIGENCIA:s.CURSO_ICIA||null,CURSOS_REALIZADOS:s.CURSOS||null,DESTINOS:s.DESTINOS||null,COMISION_AL_EXTERIOR:s.COMISION_EXT||null,NRO_DE_POC:s.POC||null,NRO_DE_CELULAR_PARTICULAR:s.CEL_PART||null,NRO_DE_CELULAR__ALTERNATIVO_EME:s.CEL_ALT||null,CORREO_ELECTRONICO_INSTITUCIONA:s.EMAIL_INST||null,CORREO_ELECTRONICO_PARTICULAR:s.EMAIL_PART||null,CAUSAS_JUDICIALES:s.CAUSAS_JUD||null,CASO_DE_GENERO:s.CASO_GENERO||null,SITUACION_DE_REVISTA:s.SITUACION||null,RESTRICCION_DE_ARMAMENTO:s.RESTR_ARMAMENTO||null,SANCIONES:s.TIPO_SANCION||null,LAO:C(s.LAO_DESDE,s.LAO_HASTA),LEX:C(s.LEX_DESDE,s.LEX_HASTA),LICENCIA_ESPECIALES:s.LIC_ESPECIALES||null,POSEE_TRAMITE_DE_RETIRO:s.TRAMITE_RETIRO||null,ART:f("art"),DAF:f("daf"),LACTANCIA:f("lact"),GRAVIDEZ:f("grav"),AGREGADO_OTRA_UNIDAD:s.AGR_OTRA_UNIDAD||null,AGREGADO_A_LA_UNIDAD:s.AGR_ESTA_UNIDAD||null,REALIZO_SOLICITUD_POR_CAMBIO_DE_DESTINO:s.SOL_CAMBIO_DEST||null,INFORMACION_MILITAR_SANITARIA:p("san"),INFORMACION_ADMINISTRATIVA:p("adm"),INFORMACION_DISCIPLINARIA:p("disc"),ESTADO_CIVIL:s.ESTADO_CIVIL||null,CASADO_CON_PERSONAL_DE_LA_PROPIA_FUERZA:s.CYG_PROPIA_FUERZA||null,GRADO_DEL_CONYUGE:s.CYG_GRADO||null,APELLIDO_Y_NOMBRE_DEL_CONYUGE:s.CYG_APELLIDO||null,DNI_DEL_CONYUGE:s.CYG_DNI||null,UNIDAD_DE_REVISTA_DEL_CONYUGE:s.CYG_UNIDAD||null,EL_CONYUGE_POSEE_LA_APTITUD_ESP:s.CYG_APT_ICIA||null,POSEE_OTRA_APTITUD_ESPECIAL:s.CYG_OTRA_APT||null,CASADO_CON_PERSONAL_DE_OTRA__FU:s.CYG_OTRA_FUERZA||null,HIJOS:s.HIJOS||null,FAMILIAR_CON_SITUACION_ESPECIAL:s.FAM_SIT_ESP||null,FAMILIARES_A_CARGO:s.FAM_CARGO||null,FAMILIARES_QUE_CONVIVEN:s.FAM_CONVIVEN||null,FECHA_DE_INCORPORACION_A_LA_ESP:E(s.FECHA_INCORP_ESP),FOTO:s.FOTO||null},b=Object.fromEntries(Object.entries(x).filter((([,e])=>null!==e&&""!==e))),u={adds:JSON.stringify([{attributes:b}]),f:"json"};n&&(u.token=n);const g=`${e.replace(/\/$/,"")}/applyEdits`;console.log("\u{1f517} Enviando a:",g),console.log("\u{1f4e4} Payload:",b);const O=yield fetch(g,{method:"POST",body:new URLSearchParams(u),headers:{"Content-Type":"application/x-www-form-urlencoded"}}),T=yield O.json().catch((e=>null));if(console.log("\u{1f4e5} Respuesta:",T),null==T?void 0:T.error)throw new Error(null!==(i=T.error.message)&&void 0!==i?i:JSON.stringify(T.error));const h=null===(l=null==T?void 0:T.addResults)||void 0===l?void 0:l[0];if(!h)throw new Error("El servidor no devolvi\xf3 addResults.");if(!h.success)throw new Error(null!==(I=null!==(d=null===(c=h.error)||void 0===c?void 0:c.description)&&void 0!==d?d:null===(A=h.error)||void 0===A?void 0:A.message)&&void 0!==I?I:"Error al insertar");if(a){const s="number"==typeof h.objectId?h.objectId:Number(h.objectId);if(!Number.isFinite(s))throw new Error("El registro se cre\xf3, pero el servidor no devolvi\xf3 objectId para adjuntar la foto.");yield function(e,s,n,a){return r(this,void 0,void 0,(function*(){var r,o,t,i,l;const c=`${e.replace(/\/$/,"")}/${s}/addAttachment`,d=new FormData;d.append("f","json"),d.append("attachment",n,n.name),a&&d.append("token",a),console.log("\u{1f4f7} Enviando foto a:",c);const A=yield fetch(c,{method:"POST",body:d}),I=yield A.json().catch((e=>null));if(console.log("\u{1f4f7} Respuesta foto:",I),null==I?void 0:I.error)throw new Error(null!==(r=I.error.message)&&void 0!==r?r:JSON.stringify(I.error));const E=null==I?void 0:I.addAttachmentResult;if(!E)throw new Error("El servidor no devolvi\xf3 addAttachmentResult al subir la foto.");if(!E.success)throw new Error(null!==(l=null!==(t=null===(o=E.error)||void 0===o?void 0:o.description)&&void 0!==t?t:null===(i=E.error)||void 0===i?void 0:i.message)&&void 0!==l?l:"Error al subir la foto como adjunto.")}))}(e,s,a,n)}}))}const H=n=>{console.log("Configuraci\xf3n recibida:",n.config);const a="https://portalgis.gna.gob.ar/server/rest/services/carga_datos_dpto_proyecto/FeatureServer/0",[o,t]=(0,s.useState)("personal"),[i,l]=(0,s.useState)(g),[c,d]=(0,s.useState)({}),[A,I]=(0,s.useState)(!1),[E,C]=(0,s.useState)(null),[p,f]=(0,s.useState)(null),[x,b]=(0,s.useState)(null),[u,O]=(0,s.useState)(R),[S,N]=(0,s.useState)(L),T=(0,s.useCallback)(((e,s)=>{l((r=>Object.assign(Object.assign({},r),{[e]:s}))),d((s=>{const r=Object.assign({},s);return delete r[e],r}))}),[]);e.React.useEffect((()=>()=>{f((e=>(e&&URL.revokeObjectURL(e),null)))}),[]);const _=()=>{l(g),d({}),C(null),t("personal"),f((e=>(e&&URL.revokeObjectURL(e),null))),b(null),O(R),N(L)},D=["GRADO","APELLIDO","NOMBRES","DNI","CE","GENERO","EMAIL_INST","EMAIL_PART","POC","CEL_PART","CEL_ALT"],j=["CARGO","UNIDAD_REVISTA","ESCALAFON"],m=e=>e.some((e=>!!c[e])),v=[{id:"personal",label:"\u{1f464} Datos Personales",hasErr:m(D)},{id:"institucional",label:"\u{1f3db}\ufe0f Institucional",hasErr:m(j)},{id:"administrative",label:"\u{1f4cb} Administrativa",hasErr:m(Object.keys(c).filter((e=>!D.includes(e)&&!j.includes(e))))}];return(0,e.jsx)("div",{css:h.widget},(0,e.jsx)("div",{css:h.header},(0,e.jsx)("div",{css:h.hicon},"GNA"),(0,e.jsx)("div",null,(0,e.jsx)("h1",{css:h.htitle},"Registro de Personal"),(0,e.jsx)("div",{css:h.hsub},"Sistema de Gesti\xf3n \u2013 Dpto. Proyecto"))),(0,e.jsx)("nav",{css:h.tabs,role:"tablist"},v.map((s=>(0,e.jsx)("button",{key:s.id,role:"tab",type:"button",css:[h.tab,o===s.id&&h.tabActive,s.hasErr&&h.tabErr],onClick:()=>t(s.id)},s.label," ",s.hasErr&&(0,e.jsx)("span",{css:h.tabBadge},"!"))))),(0,e.jsx)("div",{css:h.body},"personal"===o&&(0,e.jsx)(U,{fs:i,err:c,on:T,fotoPreview:p,setFotoPreview:f,setFotoFile:b}),"institucional"===o&&(0,e.jsx)(k,{fs:i,err:c,on:T}),"administrative"===o&&(0,e.jsx)(F,{fs:i,err:c,on:T,regs:u,setRegs:O,trams:S,setTrams:N})),E&&(0,e.jsx)("div",{css:[h.feedback,"success"===E.type?h.fbOk:h.fbErr]},E.msg),(0,e.jsx)("div",{css:h.footer},(0,e.jsx)("button",{css:[h.btn,h.btnSecond],onClick:_,disabled:A,type:"button"},"\u{1f5d1}\ufe0f Limpiar Formulario"),(0,e.jsx)("div",{css:h.fr},"personal"!==o&&(0,e.jsx)("button",{css:[h.btn,h.btnGhost],disabled:A,type:"button",onClick:()=>t("administrative"===o?"institucional":"personal")},"\u2190 Anterior"),"administrative"!==o?(0,e.jsx)("button",{css:[h.btn,h.btnPrimary],type:"button",onClick:()=>t("personal"===o?"institucional":"administrative")},"Siguiente \u2192"):(0,e.jsx)("button",{css:[h.btn,h.btnSave],onClick:()=>r(void 0,void 0,void 0,(function*(){const s=(()=>{const e={};i.GRADO||(e.GRADO="Grado es obligatorio."),i.APELLIDO||(e.APELLIDO="Apellido es obligatorio."),i.NOMBRES||(e.NOMBRES="Nombres es obligatorio."),i.DNI||(e.DNI="DNI es obligatorio."),i.GENERO||(e.GENERO="G\xe9nero es obligatorio."),i.CARGO||(e.CARGO="Cargo es obligatorio."),i.UNIDAD_REVISTA||(e.UNIDAD_REVISTA="Unidad de Revista es obligatoria."),i.ESCALAFON||(e.ESCALAFON="Escalaf\xf3n es obligatorio."),i.SITUACION||(e.SITUACION="Situaci\xf3n de Revista es obligatoria.");const s=["DNI","CE","POC","CEL_PART","CEL_ALT","CYG_DNI"];for(const r of s)i[r]&&!/^\d+$/.test(i[r])&&(e[r]="Solo n\xfameros.");const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return i.EMAIL_INST&&!r.test(i.EMAIL_INST)&&(e.EMAIL_INST="Email inv\xe1lido."),i.EMAIL_PART&&!r.test(i.EMAIL_PART)&&(e.EMAIL_PART="Email inv\xe1lido."),d(e),e})();if(Object.keys(s).length>0){const e=["GRADO","APELLIDO","NOMBRES","DNI","CE","GENERO","EMAIL_INST","EMAIL_PART","POC","CEL_PART","CEL_ALT"],r=["CARGO","UNIDAD_REVISTA","ESCALAFON"];return Object.keys(s).some((s=>e.includes(s)))?t("personal"):Object.keys(s).some((e=>r.includes(e)))?t("institucional"):t("administrative"),void C({type:"error",msg:"Hay errores en el formulario. Revise los campos marcados."})}I(!0),C(null);try{const s=e.SessionManager.getInstance().getMainSession();if(!s||!s.token)throw new Error("No hay sesi\xf3n activa de ArcGIS.");yield w(a,i,s.token,x,u,S),C({type:"success",msg:"\u2705 Registro guardado exitosamente."}),setTimeout(_,2500)}catch(e){console.error("\u274c Error completo:",e);const s=e instanceof Error?e.message:String(e);C({type:"error",msg:`\u274c Error al guardar: ${s}`})}finally{I(!1)}})),disabled:A,type:"button"},A?"\u23f3 Guardando\u2026":"\u{1f4be} Guardar registro"))))};function B(e){a.p=e}})(),o})())}}}));