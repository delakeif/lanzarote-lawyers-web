// src/data/areas.js
// Each service has a title (visible) and detail (expands on click, fully indexable by Google)

export const areas = [
  {
    slug: 'inmobiliario',
    icon: 'M3 11L12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Derecho inmobiliario', en: 'Real Estate Law', de: 'Immobilienrecht' },
    summary: {
      es: 'Compraventas, arrendamientos, comunidades, contratos de obra e inversión inmobiliaria en Canarias.',
      en: 'Property sales, leases, communities of owners, construction contracts and real estate investment.',
      de: 'Immobilienkauf, Mietverträge, Eigentümergemeinschaften, Bauverträge und Investitionen auf den Kanaren.',
    },
    intro: {
      es: 'El departamento de derecho inmobiliario lleva más de treinta años ayudando a nuestros clientes —nacionales y extranjeros— en sus operaciones e inversiones inmobiliarias en Lanzarote y en las Islas Canarias. Acompañamos cada operación de principio a fin, desde el estudio previo de la situación jurídica del inmueble hasta la inscripción registral definitiva.',
      en: 'Our real estate department has spent over thirty years helping our clients —both national and foreign— with their property transactions and investments in Lanzarote and the Canary Islands. We accompany every operation from start to finish, from the prior study of the property legal status to the final land registry inscription.',
      de: 'Unsere Immobilienabteilung unterstützt seit über dreißig Jahren unsere Mandanten — sowohl nationale als auch ausländische — bei ihren Immobilientransaktionen und Investitionen auf Lanzarote und den Kanarischen Inseln. Wir begleiten jede Transaktion von Anfang bis Ende, von der rechtlichen Vorprüfung der Immobilie bis zur endgültigen Grundbucheintragung.',
    },
    services: [
      {
        title: { es: 'Compraventa de inmuebles', en: 'Property sales and purchases', de: 'Immobilienkauf und -verkauf' },
        detail: {
          es: 'Asesoramiento integral en la compra y venta de viviendas, locales, fincas rústicas y solares. Nos encargamos de la verificación registral y catastral del inmueble, la redacción o revisión del contrato de arras y del contrato de compraventa, la coordinación con la notaría para el otorgamiento de la escritura pública y la posterior inscripción en el Registro de la Propiedad. Gestionamos igualmente la liquidación de los impuestos correspondientes (ITP, IGIC, Plusvalía municipal).',
          en: 'Full advisory on the purchase and sale of homes, commercial premises, rural properties and building plots. We handle the land registry and cadastral verification of the property, draft or review the deposit contract and the sale agreement, coordinate with the notary for the execution of the public deed and the subsequent inscription in the Land Registry. We also manage the settlement of applicable taxes (Transfer Tax, IGIC, Municipal Capital Gains Tax).',
          de: 'Umfassende Beratung beim Kauf und Verkauf von Wohnungen, Gewerberäumen, landwirtschaftlichen Grundstücken und Baugrundstücken. Wir übernehmen die Grundbuch- und Katasterprüfung der Immobilie, erstellen oder prüfen den Reservierungsvertrag und den Kaufvertrag, koordinieren mit dem Notar die Beurkundung und die anschließende Eintragung im Grundbuch. Wir verwalten auch die Abwicklung der anfallenden Steuern (Grunderwerbsteuer, IGIC, kommunale Wertzuwachssteuer).',
        },
      },
      {
        title: { es: 'Arrendamientos urbanos y rústicos', en: 'Urban and rural leases', de: 'Städtische und ländliche Mietverträge' },
        detail: {
          es: 'Redacción y revisión de contratos de alquiler de vivienda habitual, de temporada y de uso turístico. Asesoramos sobre las obligaciones legales del arrendador y del arrendatario conforme a la Ley de Arrendamientos Urbanos, incluyendo actualizaciones de renta, depósitos, obras de conservación y causas de resolución del contrato. En caso de impago, tramitamos el procedimiento de desahucio y reclamación de rentas debidas.',
          en: 'Drafting and review of rental contracts for primary residences, seasonal lets and tourist use. We advise on the legal obligations of landlord and tenant under the Urban Leases Act, including rent updates, deposits, maintenance works and grounds for contract termination. In cases of non-payment, we handle eviction proceedings and recovery of outstanding rent.',
          de: 'Erstellung und Prüfung von Mietverträgen für Hauptwohnsitze, Saisonvermietung und touristische Nutzung. Wir beraten über die gesetzlichen Pflichten von Vermieter und Mieter nach dem Mietrecht, einschließlich Mietanpassungen, Kautionen, Instandhaltungsarbeiten und Kündigungsgründe. Bei Zahlungsverzug führen wir Räumungsverfahren und die Einforderung ausstehender Mieten durch.',
        },
      },
      {
        title: { es: 'Comunidades de propietarios', en: 'Communities of owners', de: 'Eigentümergemeinschaften' },
        detail: {
          es: 'Asesoramiento en la constitución y funcionamiento de comunidades de propietarios, asistencia en juntas, impugnación de acuerdos comunitarios y reclamación judicial de cuotas impagadas. Resolvemos conflictos sobre elementos comunes, obras no autorizadas, y actuamos en procedimientos de división de la cosa común cuando resulta necesario.',
          en: 'Advisory on the incorporation and management of communities of owners, attendance at meetings, challenging community resolutions and judicial recovery of unpaid fees. We resolve disputes over common elements, unauthorised works, and act in proceedings for the division of common property when necessary.',
          de: 'Beratung bei der Gründung und Verwaltung von Eigentümergemeinschaften, Teilnahme an Versammlungen, Anfechtung von Gemeinschaftsbeschlüssen und gerichtliche Einforderung ausstehender Beiträge. Wir lösen Streitigkeiten über Gemeinschaftseigentum, nicht genehmigte Bauarbeiten und führen bei Bedarf Verfahren zur Aufteilung des Gemeinschaftseigentums durch.',
        },
      },
      {
        title: { es: 'Due diligence inmobiliaria', en: 'Real estate due diligence', de: 'Immobilien-Due-Diligence' },
        detail: {
          es: 'Antes de cualquier operación de adquisición, realizamos un estudio completo de la situación jurídica del inmueble: verificación registral (cargas, hipotecas, embargos, servidumbres), situación catastral (superficie, linderos, discrepancias), cumplimiento urbanístico (licencias, calificación del suelo, situación de fuera de ordenación) y situación fiscal (deudas tributarias pendientes, IBI). Este análisis previo evita sorpresas y protege su inversión.',
          en: 'Before any acquisition, we carry out a thorough study of the property legal status: land registry verification (charges, mortgages, attachments, easements), cadastral status (area, boundaries, discrepancies), urban planning compliance (licences, land classification, non-conforming status) and tax status (pending tax debts, property tax). This prior analysis prevents surprises and protects your investment.',
          de: 'Vor jedem Erwerb führen wir eine umfassende Prüfung der rechtlichen Situation der Immobilie durch: Grundbuchprüfung (Belastungen, Hypotheken, Pfändungen, Dienstbarkeiten), Katasterstatus (Fläche, Grenzen, Abweichungen), baurechtliche Konformität (Genehmigungen, Bodenklassifizierung, Bestandsschutz) und steuerliche Situation (offene Steuerschulden, Grundsteuer). Diese Vorprüfung vermeidet Überraschungen und schützt Ihre Investition.',
        },
      },
      {
        title: { es: 'Inversión extranjera en inmuebles', en: 'Foreign real estate investment', de: 'Ausländische Immobilieninvestitionen' },
        detail: {
          es: 'Acompañamos a inversores y compradores extranjeros en todo el proceso de adquisición de inmuebles en Lanzarote: obtención del NIE (Número de Identificación de Extranjero), apertura de cuenta bancaria en España, otorgamiento de poderes notariales, asesoramiento fiscal para no residentes (IRNR, declaración de bienes en el extranjero), y coordinación con asesores fiscales en el país de origen del cliente cuando resulta necesario.',
          en: 'We accompany foreign investors and buyers throughout the entire property acquisition process in Lanzarote: obtaining the NIE (Foreigner Identification Number), opening a Spanish bank account, granting notarial powers of attorney, tax advice for non-residents (IRNR, declaration of assets abroad), and coordination with tax advisors in the client home country when necessary.',
          de: 'Wir begleiten ausländische Investoren und Käufer durch den gesamten Immobilienerwerbsprozess auf Lanzarote: Beantragung der NIE (Ausländeridentifikationsnummer), Eröffnung eines spanischen Bankkontos, Erteilung notarieller Vollmachten, steuerliche Beratung für Nichtansässige (IRNR, Auslandsvermögenserklärung) und Koordination mit Steuerberatern im Heimatland des Mandanten, wenn erforderlich.',
        },
      },
      {
        title: { es: 'Contratos de obra y defectos constructivos', en: 'Construction contracts and building defects', de: 'Bauverträge und Baumängel' },
        detail: {
          es: 'Redacción y revisión de contratos de obra con constructores y promotores, seguimiento de la ejecución, y reclamaciones por defectos constructivos al amparo de la Ley de Ordenación de la Edificación. Reclamamos responsabilidades por vicios ocultos, defectos de acabado, problemas estructurales y daños derivados de una ejecución deficiente, tanto en vía extrajudicial como judicial.',
          en: 'Drafting and review of construction contracts with builders and developers, monitoring of execution, and claims for building defects under the Building Act. We claim liability for hidden defects, finishing faults, structural problems and damage resulting from poor execution, both out of court and in court.',
          de: 'Erstellung und Prüfung von Bauverträgen mit Bauunternehmern und Bauträgern, Überwachung der Ausführung und Mängelrügen nach dem Bauordnungsgesetz. Wir machen Haftungsansprüche wegen verdeckter Mängel, Fertigstellungsmängeln, Strukturproblemen und Schäden durch mangelhafte Ausführung geltend, sowohl außergerichtlich als auch vor Gericht.',
        },
      },
    ],
  },
  {
    slug: 'mercantil',
    icon: 'M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1M4 21h16',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Derecho de sociedades y mercantil', en: 'Corporate and Commercial Law', de: 'Gesellschafts- und Handelsrecht' },
    summary: {
      es: 'Constitución de sociedades, acuerdos societarios, operaciones mercantiles y asesoramiento empresarial.',
      en: 'Company incorporation, corporate resolutions, business transactions and corporate advice.',
      de: 'Gesellschaftsgründungen, Beschlüsse, Handelsgeschäfte und Unternehmensberatung.',
    },
    intro: {
      es: 'Asesoramos a empresas nacionales y extranjeras en todas las fases de su actividad empresarial en Canarias: desde la constitución de la sociedad hasta la resolución de conflictos societarios, pasando por la reestructuración y las operaciones de compraventa de participaciones. Nuestro conocimiento del Régimen Económico y Fiscal de Canarias (REF) nos permite ofrecer un asesoramiento especialmente adaptado al entorno insular.',
      en: 'We advise national and foreign companies at every stage of their business activity in the Canary Islands: from company incorporation to the resolution of corporate disputes, including restructuring and share transfer operations. Our knowledge of the Canary Islands Economic and Tax Regime (REF) enables us to provide advice specially adapted to the island environment.',
      de: 'Wir beraten nationale und ausländische Unternehmen in allen Phasen ihrer Geschäftstätigkeit auf den Kanarischen Inseln: von der Unternehmensgründung bis zur Lösung von Gesellschaftskonflikten, einschließlich Umstrukturierung und Anteilsübertragungen. Unsere Kenntnis des kanarischen Wirtschafts- und Steuerregimes (REF) ermöglicht uns eine speziell auf das insulare Umfeld abgestimmte Beratung.',
    },
    services: [
      {
        title: { es: 'Constitución de sociedades', en: 'Company incorporation', de: 'Gesellschaftsgründung' },
        detail: {
          es: 'Constituimos sociedades limitadas (SL) y anónimas (SA) adaptadas a las necesidades de cada cliente. Nos encargamos de la redacción de los estatutos sociales, la obtención del NIF provisional, la apertura de cuenta bancaria, el otorgamiento de la escritura de constitución ante notario, la inscripción en el Registro Mercantil y el alta en Hacienda. Asesoramos sobre la estructura societaria más adecuada según la actividad y el volumen de negocio previsto.',
          en: 'We incorporate limited companies (SL) and public companies (SA) tailored to each client needs. We handle drafting the articles of association, obtaining the provisional tax number, opening a bank account, executing the deed of incorporation before a notary, inscription in the Commercial Registry and registration with the Tax Authority. We advise on the most suitable corporate structure according to the planned activity and business volume.',
          de: 'Wir gründen Gesellschaften mit beschränkter Haftung (SL) und Aktiengesellschaften (SA), die auf die Bedürfnisse jedes Mandanten zugeschnitten sind. Wir übernehmen die Erstellung der Satzung, die Beschaffung der vorläufigen Steuernummer, die Kontoeröffnung, die notarielle Beurkundung der Gründungsurkunde, die Eintragung im Handelsregister und die Anmeldung beim Finanzamt.',
        },
      },
      {
        title: { es: 'Acuerdos societarios y juntas', en: 'Corporate resolutions and meetings', de: 'Gesellschafterbeschlüsse und Versammlungen' },
        detail: {
          es: 'Redacción de pactos de socios y acuerdos parasociales, convocatoria y asistencia a juntas generales, redacción de actas y elevación a público de acuerdos sociales. Asesoramos en la toma de decisiones societarias relevantes: ampliaciones y reducciones de capital, modificación de estatutos, nombramiento y cese de administradores.',
          en: 'Drafting of shareholder agreements and side agreements, convening and attending general meetings, drafting minutes and notarising corporate resolutions. We advise on significant corporate decisions: capital increases and reductions, amendment of articles, appointment and removal of directors.',
          de: 'Erstellung von Gesellschaftervereinbarungen und Nebenvereinbarungen, Einberufung und Teilnahme an Hauptversammlungen, Protokollerstellung und notarielle Beurkundung von Beschlüssen. Wir beraten bei wesentlichen Unternehmensentscheidungen: Kapitalerhöhungen und -herabsetzungen, Satzungsänderungen, Bestellung und Abberufung von Geschäftsführern.',
        },
      },
      {
        title: { es: 'Compraventa de participaciones', en: 'Transfer of shares', de: 'Anteilsübertragung' },
        detail: {
          es: 'Asesoramiento y ejecución de operaciones de compraventa de participaciones sociales y acciones: due diligence legal de la sociedad objetivo, negociación de los términos de la transacción, redacción del contrato de compraventa (SPA), cláusulas de garantía y representación, y cierre de la operación ante notario.',
          en: 'Advisory and execution of share and stake transfer operations: legal due diligence of the target company, negotiation of transaction terms, drafting of the share purchase agreement (SPA), warranty and representation clauses, and closing before a notary.',
          de: 'Beratung und Durchführung von Anteilskauf- und Übertragungsgeschäften: rechtliche Due Diligence der Zielgesellschaft, Verhandlung der Transaktionsbedingungen, Erstellung des Anteilskaufvertrags (SPA), Garantie- und Gewährleistungsklauseln und Abschluss vor dem Notar.',
        },
      },
      {
        title: { es: 'Empresa extranjera en Canarias', en: 'Foreign companies in the Canary Islands', de: 'Ausländische Unternehmen auf den Kanaren' },
        detail: {
          es: 'Asesoramos a empresas extranjeras que desean establecerse o invertir en las Islas Canarias. Analizamos la estructura más adecuada (sucursal, filial, establecimiento permanente), gestionamos las obligaciones registrales y fiscales, y asesoramos sobre las ventajas del Régimen Económico y Fiscal de Canarias, incluyendo la Zona Especial Canaria (ZEC) y la Reserva para Inversiones en Canarias (RIC).',
          en: 'We advise foreign companies wishing to establish themselves or invest in the Canary Islands. We analyse the most suitable structure (branch, subsidiary, permanent establishment), manage registration and tax obligations, and advise on the advantages of the Canary Islands Economic and Tax Regime, including the Canary Islands Special Zone (ZEC) and the Reserve for Investments in the Canaries (RIC).',
          de: 'Wir beraten ausländische Unternehmen, die sich auf den Kanarischen Inseln niederlassen oder investieren möchten. Wir analysieren die geeignetste Struktur (Niederlassung, Tochtergesellschaft, Betriebsstätte), verwalten die Registrierungs- und Steuerpflichten und beraten über die Vorteile des kanarischen Wirtschafts- und Steuerregimes, einschließlich der Kanarischen Sonderzone (ZEC) und der Investitionsrücklage für die Kanaren (RIC).',
        },
      },
      {
        title: { es: 'Conflictos societarios', en: 'Corporate disputes', de: 'Gesellschaftskonflikte' },
        detail: {
          es: 'Representación y defensa en conflictos entre socios, impugnación de acuerdos sociales, acciones de responsabilidad contra administradores, exclusión y separación de socios. Buscamos siempre en primer lugar una solución negociada y, cuando no es posible, defendemos sus intereses ante los tribunales.',
          en: 'Representation and defence in shareholder disputes, challenging corporate resolutions, liability actions against directors, exclusion and withdrawal of shareholders. We always seek a negotiated solution first and, when not possible, defend your interests before the courts.',
          de: 'Vertretung und Verteidigung bei Gesellschafterstreitigkeiten, Anfechtung von Gesellschaftsbeschlüssen, Haftungsklagen gegen Geschäftsführer, Ausschluss und Austritt von Gesellschaftern. Wir suchen stets zunächst eine Verhandlungslösung und verteidigen, wenn dies nicht möglich ist, Ihre Interessen vor Gericht.',
        },
      },
    ],
  },
  {
    slug: 'danos-personales',
    icon: 'M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Daños personales', en: 'Personal Injury', de: 'Personenschäden' },
    summary: {
      es: 'Reclamaciones por accidentes, responsabilidad civil y daños personales con elementos locales o internacionales.',
      en: 'Claims arising from accidents, civil liability and personal injury with local or international elements.',
      de: 'Ansprüche aus Unfällen, Haftpflicht und Personenschäden mit lokalem oder internationalem Bezug.',
    },
    intro: {
      es: 'Estamos especializados en reclamaciones por daños personales, tanto por accidentes de circulación como por otras causas. Nuestra experiencia de más de treinta años con clientes de distintas nacionalidades nos permite gestionar reclamaciones con elementos internacionales con eficacia y rigor, tanto en la vía extrajudicial como ante los tribunales.',
      en: 'We specialise in personal injury claims, both from traffic accidents and other causes. Our experience of over thirty years with clients of different nationalities enables us to handle claims with international elements effectively and rigorously, both out of court and before the courts.',
      de: 'Wir sind spezialisiert auf Personenschadensansprüche, sowohl aus Verkehrsunfällen als auch aus anderen Ursachen. Unsere über dreißigjährige Erfahrung mit Mandanten verschiedener Nationalitäten ermöglicht es uns, Ansprüche mit internationalem Bezug effektiv und gründlich zu bearbeiten, sowohl außergerichtlich als auch vor Gericht.',
    },
    services: [
      {
        title: { es: 'Accidentes de circulación', en: 'Traffic accidents', de: 'Verkehrsunfälle' },
        detail: {
          es: 'Reclamación íntegra de indemnizaciones frente a compañías aseguradoras por accidentes de tráfico ocurridos en Lanzarote y en toda España. Gestionamos la obtención de informes médicos, la valoración del daño corporal conforme al baremo legal vigente, la negociación extrajudicial con la aseguradora, y si no se alcanza un acuerdo satisfactorio, la reclamación judicial. Incluye lesiones permanentes, incapacidades, secuelas y lucro cesante.',
          en: 'Full compensation claims against insurance companies for traffic accidents occurring in Lanzarote and throughout Spain. We manage obtaining medical reports, personal injury assessment under the current legal scale, out-of-court negotiation with the insurer, and if a satisfactory agreement is not reached, court proceedings. This includes permanent injuries, disabilities, long-term effects and loss of earnings.',
          de: 'Umfassende Entschädigungsansprüche gegen Versicherungen für Verkehrsunfälle auf Lanzarote und in ganz Spanien. Wir kümmern uns um die Einholung medizinischer Berichte, die Bewertung des Personenschadens nach dem geltenden Bewertungsmaßstab, die außergerichtliche Verhandlung mit dem Versicherer und, falls keine zufriedenstellende Einigung erzielt wird, das Gerichtsverfahren.',
        },
      },
      {
        title: { es: 'Accidentes con elemento internacional', en: 'Accidents with international elements', de: 'Unfälle mit internationalem Bezug' },
        detail: {
          es: 'Atendemos a turistas y residentes extranjeros lesionados en Lanzarote, así como accidentes con vehículos o partes implicadas de otras nacionalidades. Coordinamos con aseguradoras extranjeras, gestionamos traducciones de informes médicos y documentación, y asesoramos sobre la legislación aplicable y la jurisdicción competente en cada caso.',
          en: 'We assist tourists and foreign residents injured in Lanzarote, as well as accidents involving vehicles or parties of other nationalities. We coordinate with foreign insurers, manage translations of medical reports and documentation, and advise on the applicable legislation and competent jurisdiction in each case.',
          de: 'Wir betreuen auf Lanzarote verletzte Touristen und ausländische Einwohner sowie Unfälle mit Fahrzeugen oder Beteiligten anderer Nationalitäten. Wir koordinieren mit ausländischen Versicherern, verwalten Übersetzungen von Arztberichten und Dokumentation und beraten über das anwendbare Recht und die zuständige Gerichtsbarkeit.',
        },
      },
      {
        title: { es: 'Responsabilidad civil y negligencia', en: 'Civil liability and negligence', de: 'Haftpflicht und Fahrlässigkeit' },
        detail: {
          es: 'Reclamaciones por daños causados por negligencia médica, profesional o de terceros. Incluye caídas en vía pública o establecimientos por deficiente mantenimiento, lesiones en actividades deportivas o de ocio, y cualquier otra situación donde exista un responsable obligado a indemnizar los daños y perjuicios causados.',
          en: 'Claims for damages caused by medical, professional or third-party negligence. This includes falls on public roads or commercial premises due to poor maintenance, injuries during sports or leisure activities, and any other situation where a liable party is required to compensate for the damages caused.',
          de: 'Ansprüche auf Schadensersatz bei ärztlicher, beruflicher oder Drittparteifahrlässigkeit. Dazu gehören Stürze auf öffentlichen Wegen oder in Geschäftsräumen wegen mangelhafter Instandhaltung, Verletzungen bei Sport- oder Freizeitaktivitäten und jede andere Situation, in der ein Verantwortlicher zum Schadensersatz verpflichtet ist.',
        },
      },
    ],
  },
  {
    slug: 'litigios',
    icon: 'M12 3v18M5 7h14M7 7l-3 7h6L7 7Zm10 0l-3 7h6l-3-7Z',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Litigios', en: 'Litigation', de: 'Prozessführung' },
    summary: {
      es: 'Procedimientos judiciales civiles y mercantiles, reclamaciones, desahucios, recursos y ejecución de resoluciones.',
      en: 'Civil and commercial court proceedings, claims, evictions, appeals and enforcement of judgments.',
      de: 'Zivil- und Handelsverfahren, Forderungen, Räumungen, Berufungen und Vollstreckungen.',
    },
    intro: {
      es: 'Ofrecemos un servicio completo y personal en todos los procedimientos ante los Tribunales españoles y en todas sus instancias. Nuestro equipo litiga en materias civiles, mercantiles y de familia, con especial atención a asuntos que involucran a clientes de distintas nacionalidades.',
      en: 'We offer a complete and personal service in all proceedings before the Spanish Courts and at all levels. Our team litigates in civil, commercial and family matters, with special attention to cases involving clients of different nationalities.',
      de: 'Wir bieten einen vollständigen und persönlichen Service in allen Verfahren vor den spanischen Gerichten und in allen Instanzen. Unser Team prozessiert in zivil-, handels- und familienrechtlichen Angelegenheiten, mit besonderer Aufmerksamkeit für Fälle mit Mandanten verschiedener Nationalitäten.',
    },
    services: [
      {
        title: { es: 'Procedimientos civiles', en: 'Civil proceedings', de: 'Zivilverfahren' },
        detail: {
          es: 'Reclamaciones de cantidad, incumplimientos contractuales, acciones de responsabilidad civil extracontractual, resolución e interpretación de contratos, y cualquier otra controversia civil que requiera intervención judicial. Actuamos en procedimientos ordinarios, verbales, monitorios y cambiarios.',
          en: 'Debt claims, breaches of contract, non-contractual civil liability actions, termination and interpretation of contracts, and any other civil disputes requiring court intervention. We act in ordinary, oral, payment order and bill of exchange proceedings.',
          de: 'Forderungen, Vertragsverletzungen, außervertragliche Haftungsklagen, Vertragsauflösung und -auslegung und jede andere zivilrechtliche Streitigkeit, die gerichtliches Eingreifen erfordert. Wir handeln in ordentlichen Verfahren, mündlichen Verfahren, Mahnverfahren und Wechselverfahren.',
        },
      },
      {
        title: { es: 'Desahucios', en: 'Evictions', de: 'Räumungsverfahren' },
        detail: {
          es: 'Tramitación completa de procedimientos de desahucio por impago de rentas o por expiración del plazo contractual. Asesoramos al propietario desde el primer requerimiento al inquilino hasta la recuperación efectiva de la posesión, pasando por la reclamación de las rentas debidas y la ejecución del lanzamiento si resulta necesario.',
          en: 'Full handling of eviction proceedings for non-payment of rent or expiry of the contractual term. We advise the landlord from the first notice to the tenant through to the effective recovery of possession, including the recovery of rent owed and enforcement of the eviction order if necessary.',
          de: 'Vollständige Bearbeitung von Räumungsverfahren wegen Mietrückständen oder Ablauf der Vertragslaufzeit. Wir beraten den Vermieter von der ersten Mahnung an den Mieter bis zur effektiven Wiedererlangung des Besitzes, einschließlich der Einforderung ausstehender Mieten und der Durchsetzung der Räumung, falls erforderlich.',
        },
      },
      {
        title: { es: 'Derecho de familia', en: 'Family law', de: 'Familienrecht' },
        detail: {
          es: 'Separaciones, divorcios de mutuo acuerdo y contenciosos, convenios reguladores, régimen de custodia y visitas, pensiones alimenticias y compensatorias, liquidación de la sociedad de gananciales, y modificación de medidas judiciales. Atendemos especialmente situaciones con elemento internacional: parejas de distinta nacionalidad, hijos residentes en distintos países.',
          en: 'Separations, mutual agreement and contentious divorces, regulatory agreements, custody and visitation arrangements, child maintenance and compensatory allowances, division of community property, and modification of court orders. We particularly attend to situations with an international element: couples of different nationalities, children resident in different countries.',
          de: 'Trennungen, einvernehmliche und streitige Scheidungen, Regelungsvereinbarungen, Sorgerechts- und Besuchsregelungen, Kindesunterhalt und Ausgleichszahlungen, Aufteilung des Gemeinschaftseigentums und Abänderung gerichtlicher Anordnungen. Wir betreuen insbesondere Situationen mit internationalem Bezug: Paare verschiedener Nationalitäten, in verschiedenen Ländern lebende Kinder.',
        },
      },
      {
        title: { es: 'Ejecución de sentencias', en: 'Enforcement of judgments', de: 'Vollstreckung von Urteilen' },
        detail: {
          es: 'Ejecución de sentencias nacionales firmes cuando la parte condenada no cumple voluntariamente. Reconocimiento y ejecución de sentencias extranjeras en España conforme al Reglamento europeo o a los convenios internacionales aplicables. Procedimientos de exequátur para resoluciones dictadas fuera de la Unión Europea.',
          en: 'Enforcement of final national judgments when the condemned party does not comply voluntarily. Recognition and enforcement of foreign judgments in Spain under the European Regulation or applicable international conventions. Exequatur proceedings for decisions issued outside the European Union.',
          de: 'Vollstreckung rechtskräftiger nationaler Urteile, wenn die verurteilte Partei nicht freiwillig erfüllt. Anerkennung und Vollstreckung ausländischer Urteile in Spanien nach der europäischen Verordnung oder anwendbaren internationalen Übereinkommen. Exequaturverfahren für außerhalb der Europäischen Union erlassene Entscheidungen.',
        },
      },
    ],
  },
  {
    slug: 'administrativo',
    icon: 'M4 21h16M6 10h12M8 10v8M12 10v8M16 10v8M5 8l7-5 7 5H5Z',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Derecho administrativo', en: 'Administrative Law', de: 'Verwaltungsrecht' },
    summary: {
      es: 'Licencias, permisos, recursos administrativos y procedimientos frente a Administraciones públicas.',
      en: 'Licences, permits, administrative appeals and public administration proceedings.',
      de: 'Lizenzen, Genehmigungen, Rechtsbehelfe und Verfahren gegenüber Behörden.',
    },
    intro: {
      es: 'Asesoramos a nuestros clientes en sus relaciones con las Administraciones públicas canarias —Ayuntamientos, Cabildo de Lanzarote y Gobierno de Canarias—, especialmente en materias urbanísticas, turísticas y de actividad económica. Nuestro conocimiento de la normativa local y autonómica nos permite anticipar problemas y ofrecer soluciones prácticas.',
      en: 'We advise our clients in their dealings with the Canary Islands public administrations —Town Councils, Lanzarote Island Council and Canary Islands Government—, especially in urban planning, tourism and economic activity matters. Our knowledge of local and regional regulations allows us to anticipate problems and offer practical solutions.',
      de: 'Wir beraten unsere Mandanten in ihren Beziehungen zu den kanarischen Behörden — Gemeindeverwaltungen, Inselrat von Lanzarote und Regierung der Kanarischen Inseln —, insbesondere in Fragen der Stadtplanung, des Tourismus und der wirtschaftlichen Tätigkeit. Unsere Kenntnis der lokalen und regionalen Vorschriften ermöglicht es uns, Probleme vorauszusehen und praktische Lösungen anzubieten.',
    },
    services: [
      {
        title: { es: 'Licencias y autorizaciones', en: 'Licences and authorisations', de: 'Lizenzen und Genehmigungen' },
        detail: {
          es: 'Tramitación de licencias de actividad, licencias de apertura, autorizaciones turísticas y comunicaciones previas ante los ayuntamientos y el Cabildo de Lanzarote. Asesoramos sobre los requisitos legales y técnicos necesarios, preparamos la documentación, y realizamos el seguimiento del expediente hasta su resolución.',
          en: 'Processing of activity licences, opening licences, tourist authorisations and prior notifications before town councils and the Lanzarote Island Council. We advise on the legal and technical requirements, prepare the documentation, and monitor the file through to resolution.',
          de: 'Bearbeitung von Tätigkeitsgenehmigungen, Eröffnungsgenehmigungen, touristischen Genehmigungen und Voranmeldungen bei Gemeindeverwaltungen und dem Inselrat von Lanzarote. Wir beraten über die rechtlichen und technischen Anforderungen, bereiten die Dokumentation vor und verfolgen den Vorgang bis zur Entscheidung.',
        },
      },
      {
        title: { es: 'Recursos administrativos', en: 'Administrative appeals', de: 'Verwaltungsrechtsbehelf' },
        detail: {
          es: 'Interposición de recursos de alzada y de reposición frente a resoluciones administrativas desfavorables. Cuando la vía administrativa se agota sin resultado satisfactorio, preparamos y presentamos recursos contencioso-administrativos ante los Juzgados y Tribunales competentes.',
          en: 'Filing of appeals against unfavourable administrative decisions. When the administrative avenue is exhausted without a satisfactory result, we prepare and file judicial appeals before the competent Courts and Tribunals.',
          de: 'Einlegung von Widersprüchen gegen ungünstige Verwaltungsentscheidungen. Wenn der Verwaltungsweg ohne zufriedenstellendes Ergebnis ausgeschöpft ist, bereiten wir verwaltungsgerichtliche Klagen vor den zuständigen Gerichten vor und reichen diese ein.',
        },
      },
      {
        title: { es: 'Expedientes sancionadores', en: 'Sanctioning procedures', de: 'Sanktionsverfahren' },
        detail: {
          es: 'Defensa frente a expedientes sancionadores incoados por las administraciones públicas: alegaciones, recursos y, en su caso, impugnación judicial de las sanciones impuestas. Atendemos sanciones en materia urbanística, turística, medioambiental y de actividades clasificadas.',
          en: 'Defence against sanctioning proceedings initiated by public administrations: submissions, appeals and, where appropriate, judicial challenge of imposed sanctions. We handle sanctions in urban planning, tourism, environmental and classified activities matters.',
          de: 'Verteidigung gegen von Behörden eingeleitete Sanktionsverfahren: Stellungnahmen, Rechtsbehelfe und gegebenenfalls gerichtliche Anfechtung der verhängten Sanktionen. Wir bearbeiten Sanktionen in den Bereichen Stadtplanung, Tourismus, Umwelt und genehmigungspflichtige Tätigkeiten.',
        },
      },
      {
        title: { es: 'Urbanismo', en: 'Town planning', de: 'Stadtplanung' },
        detail: {
          es: 'Asesoramiento sobre calificación y clasificación del suelo, licencias de obra mayor y menor, declaraciones de ruina, expedientes de disciplina urbanística, y adaptación a la normativa del Plan Insular de Ordenación de Lanzarote. Analizamos la situación urbanística de cada inmueble antes de cualquier operación de compra o inversión.',
          en: 'Advisory on land classification and qualification, major and minor building permits, ruin declarations, urban planning enforcement proceedings, and compliance with the Lanzarote Island Spatial Plan. We analyse the urban planning status of each property before any purchase or investment operation.',
          de: 'Beratung über Bodenklassifizierung, Baugenehmigungen, Abrisserklärungen, baurechtliche Disziplinarverfahren und Anpassung an die Vorschriften des Inselraumordnungsplans von Lanzarote. Wir analysieren den städtebaulichen Status jeder Immobilie vor jedem Kauf oder jeder Investition.',
        },
      },
    ],
  },
  {
    slug: 'vivienda-vacacional',
    icon: 'M3 11L12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9ZM16 3v4',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Vivienda vacacional', en: 'Holiday Rentals', de: 'Ferienvermietung' },
    summary: {
      es: 'Alquiler turístico, registros, declaraciones responsables, inspecciones, sanciones y normativa turística.',
      en: 'Holiday rentals, registrations, responsible declarations, inspections, sanctions and tourism regulations.',
      de: 'Ferienvermietung, Registrierungen, Erklärungen, Inspektionen, Sanktionen und Tourismusrecht.',
    },
    intro: {
      es: 'Ofrecemos asesoramiento jurídico especializado en materia de vivienda vacacional y alquiler turístico en Lanzarote. Conocemos en profundidad la normativa canaria, su evolución reciente —incluyendo las consecuencias de la Sentencia del Tribunal Supremo sobre el Registro Único— y las particularidades de cada municipio de la isla.',
      en: 'We offer specialised legal advice on holiday rentals and tourist accommodation in Lanzarote. We have an in-depth knowledge of Canary Islands regulations, their recent evolution —including the consequences of the Supreme Court ruling on the Single Registry— and the particularities of each municipality on the island.',
      de: 'Wir bieten spezialisierte Rechtsberatung in Bezug auf Ferienwohnungen und touristische Unterkünfte auf Lanzarote. Wir kennen die kanarischen Vorschriften genau, ihre jüngste Entwicklung — einschließlich der Folgen des Urteils des Obersten Gerichtshofs zum Einheitsregister — und die Besonderheiten jeder Gemeinde der Insel.',
    },
    services: [
      {
        title: { es: 'Alta y registro de vivienda vacacional', en: 'Holiday rental registration', de: 'Registrierung von Ferienwohnungen' },
        detail: {
          es: 'Tramitación completa del alta de viviendas vacacionales ante el Cabildo de Lanzarote y los organismos turísticos competentes. Verificamos que el inmueble cumple los requisitos legales y técnicos exigidos, preparamos la declaración responsable de inicio de actividad, y gestionamos la obtención del número de registro de alquiler turístico.',
          en: 'Complete processing of holiday rental registrations before the Lanzarote Island Council and the competent tourism authorities. We verify that the property meets the legal and technical requirements, prepare the responsible declaration for starting the activity, and manage the obtaining of the tourist rental registration number.',
          de: 'Vollständige Bearbeitung der Registrierung von Ferienwohnungen beim Inselrat von Lanzarote und den zuständigen Tourismusbehörden. Wir prüfen, ob die Immobilie die gesetzlichen und technischen Anforderungen erfüllt, bereiten die verantwortliche Erklärung für den Tätigkeitsbeginn vor und verwalten die Beschaffung der Registrierungsnummer für touristische Vermietung.',
        },
      },
      {
        title: { es: 'Defensa frente a inspecciones y sanciones', en: 'Defence against inspections and sanctions', de: 'Verteidigung bei Inspektionen und Sanktionen' },
        detail: {
          es: 'Asistencia y defensa del propietario en inspecciones turísticas. Formulación de alegaciones frente a expedientes sancionadores por actividad turística sin autorización, incumplimiento de normativa o irregularidades en la declaración responsable. Recurso administrativo y, en su caso, contencioso-administrativo contra las sanciones impuestas.',
          en: 'Assistance and defence of the owner during tourism inspections. Filing of submissions against sanctioning proceedings for unauthorised tourist activity, regulatory non-compliance or irregularities in the responsible declaration. Administrative appeals and, where appropriate, judicial appeals against sanctions imposed.',
          de: 'Beistand und Verteidigung des Eigentümers bei Tourismusinspektionen. Einreichung von Stellungnahmen gegen Sanktionsverfahren wegen nicht genehmigter touristischer Tätigkeit, Nichteinhaltung von Vorschriften oder Unregelmäßigkeiten in der verantwortlichen Erklärung. Verwaltungsrechtsbehelf und gegebenenfalls verwaltungsgerichtliche Klage gegen verhängte Sanktionen.',
        },
      },
      {
        title: { es: 'Viabilidad legal de la propiedad', en: 'Legal viability of the property', de: 'Rechtliche Machbarkeit der Immobilie' },
        detail: {
          es: 'Estudio previo de la situación jurídica, urbanística y registral de la propiedad para determinar si puede destinarse legalmente al alquiler vacacional. Analizamos la calificación del suelo, la normativa municipal, las limitaciones de la comunidad de propietarios y cualquier otra restricción que pueda afectar a la actividad turística.',
          en: 'Prior study of the legal, urban planning and registry status of the property to determine whether it can legally be used for holiday rental. We analyse the land classification, municipal regulations, community of owners restrictions and any other limitation that may affect the tourist activity.',
          de: 'Vorprüfung der rechtlichen, städtebaulichen und grundbuchrechtlichen Situation der Immobilie, um festzustellen, ob sie legal für die Ferienvermietung genutzt werden kann. Wir analysieren die Bodenklassifizierung, kommunale Vorschriften, Beschränkungen der Eigentümergemeinschaft und jede andere Einschränkung, die die touristische Tätigkeit beeinflussen könnte.',
        },
      },
    ],
  },
  {
    slug: 'solucion-extrajudicial',
    icon: 'M8 12l2 2 4-4M4 13l4-4 4 4 4-4 4 4M6 16l2 2M16 18l2-2',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Solución extrajudicial de conflictos', en: 'Extrajudicial Dispute Resolution', de: 'Außergerichtliche Streitbeilegung' },
    summary: {
      es: 'Negociación, mediación y resolución ágil de conflictos civiles y mercantiles sin acudir a juicio.',
      en: 'Negotiation, mediation and efficient resolution of civil and commercial disputes without going to court.',
      de: 'Verhandlung, Mediation und effiziente Lösung zivil- und handelsrechtlicher Streitigkeiten ohne Gerichtsverfahren.',
    },
    intro: {
      es: 'La Ley 1/2025 de eficiencia del Servicio Público de Justicia refuerza las vías extrajudiciales como paso previo obligatorio en muchos procedimientos civiles. Nuestro equipo está especializado en alcanzar soluciones negociadas eficaces, ahorrando a nuestros clientes el tiempo, el coste y el desgaste emocional de un proceso judicial.',
      en: 'Law 1/2025 on the efficiency of the Public Justice Service reinforces extrajudicial avenues as a mandatory preliminary step in many civil proceedings. Our team specialises in reaching effective negotiated solutions, saving our clients the time, cost and emotional toll of court proceedings.',
      de: 'Das Gesetz 1/2025 zur Effizienz des öffentlichen Justizdienstes stärkt außergerichtliche Wege als obligatorische Vorstufe in vielen Zivilverfahren. Unser Team ist darauf spezialisiert, wirksame Verhandlungslösungen zu erzielen und unseren Mandanten Zeit, Kosten und emotionale Belastung eines Gerichtsverfahrens zu ersparen.',
    },
    services: [
      {
        title: { es: 'Negociación extrajudicial', en: 'Out-of-court negotiation', de: 'Außergerichtliche Verhandlung' },
        detail: {
          es: 'Conducimos negociaciones extrajudiciales entre particulares, empresas y aseguradoras para alcanzar acuerdos transaccionales que eviten el litigio. Redactamos los acuerdos con validez jurídica y, cuando es necesario, los elevamos a escritura pública para dotarlos de fuerza ejecutiva.',
          en: 'We conduct out-of-court negotiations between individuals, companies and insurers to reach settlement agreements that avoid litigation. We draft legally binding agreements and, when necessary, elevate them to public deed to grant them enforceability.',
          de: 'Wir führen außergerichtliche Verhandlungen zwischen Privatpersonen, Unternehmen und Versicherern, um Vergleichsvereinbarungen zu erzielen, die einen Rechtsstreit vermeiden. Wir erstellen rechtsverbindliche Vereinbarungen und lassen sie bei Bedarf notariell beurkunden, um ihnen Vollstreckbarkeit zu verleihen.',
        },
      },
      {
        title: { es: 'Mediación civil y mercantil', en: 'Civil and commercial mediation', de: 'Zivil- und Handelsmediation' },
        detail: {
          es: 'Asistimos a nuestros clientes en procedimientos de mediación con mediadores acreditados, una vía cada vez más utilizada y legalmente reconocida para resolver conflictos contractuales, disputas entre socios, reclamaciones entre vecinos y desacuerdos en herencias, entre otros asuntos.',
          en: 'We assist our clients in mediation proceedings with accredited mediators, an increasingly used and legally recognised avenue for resolving contractual disputes, shareholder disagreements, neighbour claims and inheritance disagreements, among other matters.',
          de: 'Wir unterstützen unsere Mandanten in Mediationsverfahren mit akkreditierten Mediatoren, einem zunehmend genutzten und rechtlich anerkannten Weg zur Lösung von Vertragsstreitigkeiten, Gesellschafterkonflikten, Nachbarschaftsstreitigkeiten und Erbauseinandersetzungen.',
        },
      },
      {
        title: { es: 'Reclamaciones previas obligatorias', en: 'Mandatory pre-action claims', de: 'Obligatorische vorgerichtliche Ansprüche' },
        detail: {
          es: 'Desde la entrada en vigor de la Ley 1/2025, muchos procedimientos civiles exigen un intento previo de solución extrajudicial. Preparamos y presentamos las reclamaciones previas formales que exige la nueva normativa, y agotamos la vía negociadora antes de acudir al juzgado, cumpliendo con el requisito legal y buscando al mismo tiempo un acuerdo que beneficie a nuestro cliente.',
          en: 'Since the entry into force of Law 1/2025, many civil proceedings require a prior attempt at extrajudicial resolution. We prepare and submit the formal pre-action claims required by the new legislation, and exhaust the negotiation avenue before going to court, fulfilling the legal requirement while at the same time seeking an agreement that benefits our client.',
          de: 'Seit dem Inkrafttreten des Gesetzes 1/2025 erfordern viele Zivilverfahren einen vorherigen Versuch der außergerichtlichen Lösung. Wir bereiten die formellen vorgerichtlichen Ansprüche vor, die die neue Gesetzgebung verlangt, und erschöpfen den Verhandlungsweg, bevor wir vor Gericht gehen, wobei wir die gesetzliche Anforderung erfüllen und gleichzeitig eine für unseren Mandanten vorteilhafte Einigung anstreben.',
        },
      },
    ],
  },
  {
    slug: 'servicios-complementarios',
    icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Servicios complementarios', en: 'Additional Services', de: 'Ergänzende Dienstleistungen' },
    summary: {
      es: 'Traducciones, obtención de NIF, poderes notariales, gestión de suministros y apoyo administrativo.',
      en: 'Translations, tax identification numbers, powers of attorney, utilities and administrative support.',
      de: 'Übersetzungen, Steuernummern, Vollmachten, Versorgungsverträge und Verwaltungsunterstützung.',
    },
    intro: {
      es: 'Más allá del asesoramiento jurídico, ofrecemos una serie de servicios complementarios pensados especialmente para clientes extranjeros que necesitan gestionar trámites en España. Nuestro personal multilingüe —español, inglés y alemán— facilita cada paso del proceso y evita malentendidos derivados de la barrera lingüística.',
      en: 'Beyond legal advice, we offer a range of complementary services especially designed for foreign clients who need to manage procedures in Spain. Our multilingual staff —Spanish, English and German— facilitates every step of the process and avoids misunderstandings arising from the language barrier.',
      de: 'Über die Rechtsberatung hinaus bieten wir eine Reihe ergänzender Dienstleistungen, die speziell für ausländische Mandanten konzipiert sind, die Verwaltungsverfahren in Spanien durchführen müssen. Unser mehrsprachiges Personal — Spanisch, Englisch und Deutsch — erleichtert jeden Schritt des Prozesses und vermeidet Missverständnisse durch die Sprachbarriere.',
    },
    services: [
      {
        title: { es: 'Traducciones', en: 'Translations', de: 'Übersetzungen' },
        detail: {
          es: 'Realizamos traducciones juradas y no juradas de documentos jurídicos, notariales, registrales y administrativos en alemán, inglés y español. Nuestro personal de nacionalidad británica y alemana garantiza la máxima fidelidad lingüística y el conocimiento de los términos legales en cada idioma.',
          en: 'We carry out sworn and non-sworn translations of legal, notarial, registry and administrative documents in German, English and Spanish. Our British and German staff guarantee maximum linguistic accuracy and knowledge of legal terminology in each language.',
          de: 'Wir fertigen beglaubigte und nicht beglaubigte Übersetzungen von juristischen, notariellen, grundbuchrechtlichen und verwaltungstechnischen Dokumenten in Deutsch, Englisch und Spanisch an. Unser britisches und deutsches Personal garantiert höchste sprachliche Genauigkeit und Kenntnis der Rechtsterminologie in jeder Sprache.',
        },
      },
      {
        title: { es: 'Obtención de NIE y NIF', en: 'NIE and NIF applications', de: 'NIE- und NIF-Beantragung' },
        detail: {
          es: 'Gestionamos la obtención del Número de Identificación de Extranjero (NIE) y del Número de Identificación Fiscal (NIF) ante las autoridades españolas. Estos números son imprescindibles para cualquier operación inmobiliaria, apertura de cuenta bancaria, contratación de suministros o actividad económica en España.',
          en: 'We manage the obtaining of the Foreigner Identification Number (NIE) and the Tax Identification Number (NIF) from the Spanish authorities. These numbers are essential for any property transaction, bank account opening, utility contracts or economic activity in Spain.',
          de: 'Wir verwalten die Beantragung der Ausländeridentifikationsnummer (NIE) und der Steueridentifikationsnummer (NIF) bei den spanischen Behörden. Diese Nummern sind unerlässlich für jede Immobilientransaktion, Kontoeröffnung, Versorgungsverträge oder wirtschaftliche Tätigkeit in Spanien.',
        },
      },
      {
        title: { es: 'Poderes notariales', en: 'Powers of attorney', de: 'Notarielle Vollmachten' },
        detail: {
          es: 'Preparamos y gestionamos el otorgamiento de poderes notariales en España y coordinamos la obtención de poderes en el país de residencia del cliente cuando este no puede desplazarse. Los poderes permiten que un representante actúe en nombre del cliente en compraventas, gestiones bancarias, trámites fiscales y procedimientos ante organismos públicos.',
          en: 'We prepare and manage the granting of notarial powers of attorney in Spain and coordinate the obtaining of powers in the client country of residence when they cannot travel. Powers of attorney allow a representative to act on the client behalf in property transactions, banking procedures, tax formalities and public body proceedings.',
          de: 'Wir bereiten notarielle Vollmachten in Spanien vor und koordinieren die Einholung von Vollmachten im Wohnsitzland des Mandanten, wenn dieser nicht reisen kann. Vollmachten ermöglichen es einem Vertreter, im Namen des Mandanten bei Immobilientransaktionen, Bankverfahren, Steuerangelegenheiten und Behördenverfahren zu handeln.',
        },
      },
      {
        title: { es: 'Gestión de suministros y trámites', en: 'Utilities and administrative procedures', de: 'Versorgungsanschlüsse und Verwaltungsverfahren' },
        detail: {
          es: 'Nos encargamos de la contratación y cambio de titularidad de suministros (agua, electricidad, teléfono), presentación de instancias y escritos ante organismos oficiales, visado de proyectos, gestiones ante el Consulado y la Embajada, y cualquier otra tramitación administrativa que el cliente necesite durante su estancia o inversión en Lanzarote.',
          en: 'We handle the contracting and change of ownership of utilities (water, electricity, telephone), filing of applications and submissions before official bodies, project endorsement, procedures before the Consulate and Embassy, and any other administrative processing the client needs during their stay or investment in Lanzarote.',
          de: 'Wir übernehmen den Abschluss und die Umschreibung von Versorgungsverträgen (Wasser, Strom, Telefon), die Einreichung von Anträgen bei Behörden, Projektbescheinigungen, Verfahren beim Konsulat und der Botschaft sowie jede weitere administrative Bearbeitung, die der Mandant während seines Aufenthalts oder seiner Investition auf Lanzarote benötigt.',
        },
      },
    ],
  },
  {
    slug: 'otras-areas',
    icon: 'M8 4h6l4 4v12H8V4Zm6 0v5h5M10 13h6M10 17h6',
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80',
    title: { es: 'Otras áreas del Derecho', en: 'Other Areas of Law', de: 'Weitere Rechtsgebiete' },
    summary: {
      es: 'Contratos civiles, derecho sucesorio, testamentos, herencias y derecho penal.',
      en: 'Civil contracts, inheritance law, wills, estates and criminal law.',
      de: 'Zivilverträge, Erbrecht, Testamente, Nachlässe und Strafrecht.',
    },
    intro: {
      es: 'Además de nuestras áreas principales, cubrimos otras ramas del derecho que afectan frecuentemente a nuestros clientes, tanto nacionales como extranjeros residentes en Lanzarote. En todos los casos ofrecemos el mismo nivel de atención personalizada y rigor profesional.',
      en: 'In addition to our main areas, we cover other branches of law that frequently affect our clients, both national and foreign residents in Lanzarote. In all cases we offer the same level of personalised attention and professional rigour.',
      de: 'Neben unseren Hauptbereichen decken wir weitere Rechtsgebiete ab, die unsere Mandanten — sowohl Einheimische als auch ausländische Einwohner Lanzarotes — häufig betreffen. In allen Fällen bieten wir das gleiche Niveau persönlicher Betreuung und professioneller Sorgfalt.',
    },
    services: [
      {
        title: { es: 'Derecho sucesorio y herencias', en: 'Inheritance and estate law', de: 'Erbrecht und Nachlässe' },
        detail: {
          es: 'Asesoramiento integral en sucesiones nacionales e internacionales: testamentos, aceptación y repudiación de herencia, beneficio de inventario, partición y adjudicación hereditaria, declaración de herederos abintestato, liquidación del Impuesto de Sucesiones en Canarias, y conflictos entre herederos. Especial atención a herencias con bienes situados en España y herederos residentes en el extranjero.',
          en: 'Full advisory on national and international successions: wills, acceptance and renunciation of inheritance, benefit of inventory, partition and adjudication of estates, declaration of intestate heirs, settlement of Inheritance Tax in the Canary Islands, and disputes between heirs. Special attention to estates with assets located in Spain and heirs resident abroad.',
          de: 'Umfassende Beratung bei nationalen und internationalen Erbfällen: Testamente, Annahme und Ausschlagung der Erbschaft, Inventarbeschränkung, Erbteilung und -zuweisung, Feststellung der gesetzlichen Erben, Abwicklung der Erbschaftsteuer auf den Kanarischen Inseln und Streitigkeiten zwischen Erben. Besondere Aufmerksamkeit für Nachlässe mit Vermögenswerten in Spanien und im Ausland ansässigen Erben.',
        },
      },
      {
        title: { es: 'Contratos civiles', en: 'Civil contracts', de: 'Zivilverträge' },
        detail: {
          es: 'Redacción, revisión y negociación de todo tipo de contratos entre particulares: compraventa de bienes muebles, préstamos entre particulares, contratos de servicios, acuerdos de mediación y transacción. Nuestro objetivo es siempre proteger los intereses de nuestro cliente y prevenir futuros conflictos mediante una redacción clara y precisa.',
          en: 'Drafting, reviewing and negotiating all types of contracts between individuals: sale of movable property, private loans, service contracts, mediation and settlement agreements. Our aim is always to protect our client interests and prevent future disputes through clear and precise drafting.',
          de: 'Erstellung, Prüfung und Verhandlung aller Arten von Verträgen zwischen Privatpersonen: Verkauf beweglicher Güter, private Darlehen, Dienstleistungsverträge, Mediations- und Vergleichsvereinbarungen. Unser Ziel ist es stets, die Interessen unserer Mandanten zu schützen und künftige Streitigkeiten durch klare und präzise Formulierung zu vermeiden.',
        },
      },
      {
        title: { es: 'Derecho penal', en: 'Criminal law', de: 'Strafrecht' },
        detail: {
          es: 'Asistencia letrada en procedimientos penales, tanto para la defensa del investigado como para el ejercicio de la acusación particular por parte de la víctima. Presentación de denuncias y querellas, asistencia al detenido, y representación en juicio oral.',
          en: 'Legal assistance in criminal proceedings, both for the defence of the accused and for the exercise of private prosecution by the victim. Filing of complaints and private prosecutions, assistance to detained persons, and representation at oral trial.',
          de: 'Rechtsbeistand in Strafverfahren, sowohl für die Verteidigung des Beschuldigten als auch für die Privatklage des Opfers. Einreichung von Anzeigen und Privatklagen, Beistand für Festgenommene und Vertretung in der mündlichen Verhandlung.',
        },
      },
    ],
  },
];

export function getAreaBySlug(slug) {
  return areas.find(a => a.slug === slug);
}

export function getAreaSlugs() {
  return areas.map(a => a.slug);
}
