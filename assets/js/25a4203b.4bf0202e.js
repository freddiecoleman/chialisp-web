(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[8825],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7903:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return c}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],s={id:"cats",title:"Chia Asset Tokens (CATs)"},l={unversionedId:"puzzles/cats",id:"puzzles/cats",isDocsHomePage:!1,title:"Chia Asset Tokens (CATs)",description:"Introduction to CATs",source:"@site/docs/puzzles/cats.md",sourceDirName:"puzzles",slug:"/puzzles/cats",permalink:"/docs/puzzles/cats",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/puzzles/cats.md",version:"current",frontMatter:{id:"cats",title:"Chia Asset Tokens (CATs)"},sidebar:"someSidebar",previous:{title:"Pooling",permalink:"/docs/puzzles/pooling"},next:{title:"Why Chia is Great",permalink:"/docs/tutorials/why_chia_is_great"}},h=[{value:"Introduction to CATs",id:"introduction-to-cats",children:[]},{value:"Design choices",id:"design-choices",children:[]},{value:"Spend Accounting",id:"spend-accounting",children:[]},{value:"Extra Delta",id:"extra-delta",children:[]},{value:"The Token and Asset Issuance Limiter (TAIL) Program",id:"the-token-and-asset-issuance-limiter-tail-program",children:[]},{value:"The limits of a TAIL&#39;s power",id:"the-limits-of-a-tails-power",children:[]},{value:"TAIL Examples",id:"tail-examples",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:h};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-cats"},"Introduction to CATs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chia Asset Tokens (CATs)")," are fungible tokens that are issued from XCH.\nThe CAT1 Standard is the first (and so far only) CAT Standard. CAT1 is a draft standard as of Nov 16, 2021. After a comment period from the Chia community, CAT1 will be finalized. This may include additional capabilities, and could result in some breaking changes to existing CATs. More information on the naming conventions used in this document can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.chia.net/2021/09/23/chia-token-standard-naming.en.html",title:"Blog entry explaining CAT1 naming conventions"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Reminder:")),(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Fungible tokens")," can be split apart, or merged together.\nThey can also be substituted for a token of equal value.\nSome common examples include gold, oil, and dollars.")),(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Non-fungible tokens"),", on the other hand, are indivisible and cannot be merged.\nThey are unique, so they cannot be substituted.\nSome common examples include cars, baseball cards, and cloakroom tickets."))),(0,o.kt)("p",null,'CATs have the property of being "marked" in a way that makes them unusable as regular XCH. However, it is usually possible to "melt" CATs back into XCH later. CATs are often used as credits, or tokens - kind of like casino chips.'),(0,o.kt)("p",null,"The chialisp code that ",(0,o.kt)("strong",{parentName:"p"},"all CATs")," share is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/protocol_and_cats_rebased/chia/wallet/puzzles/cat.clvm",title:"cat.clvm - the source code that all CATs share"},"here"),". Without following this puzzle format, wallets will not be able to recognize a token as a CAT."),(0,o.kt)("p",null,"The entire purpose of the code linked above is to ensure that the supply of a specific CAT never changes unless a specific set of \u201crules of issuance\u201d is followed. Each CAT has its own unique rules of issuance, ",(0,o.kt)("strong",{parentName:"p"},"which is the only distinction between different types of CATs"),". These issuance rules take the form of an arbitrary Chialisp program that follows a specific structure.  We call that program the ",(0,o.kt)("strong",{parentName:"p"},"Token and Asset Issuance Limitations (TAIL)"),"."),(0,o.kt)("p",null,"The CAT layer is an ",(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/common_functions#outer-and-inner-puzzles",title:"Chilisp documentation for how to create outer and inner puzzles"},"outer puzzle"),", which contains two curried parameters:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"An inner puzzle, which controls the CAT's ownership."),(0,o.kt)("li",{parentName:"ol"},"The puzzlehash of a TAIL, which defines three aspects of a CAT:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The CAT's type. (Two CATs with the same TAIL are of the same type, even if they contain different inner puzzles.)"),(0,o.kt)("li",{parentName:"ul"},"The CAT's issuance rules."),(0,o.kt)("li",{parentName:"ul"},"The CAT's melting rules.")))),(0,o.kt)("p",null,"Some examples of issuance requirements that different TAILs could accommodate include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Stablecoins - The creator will want to mint new tokens as they gain funds to back them."),(0,o.kt)("li",{parentName:"ul"},"Limited supply tokens - The creator will want to run a single issuance, with the guarantee that no more tokens of the same type can ever be minted."),(0,o.kt)("li",{parentName:"ul"},"Asset redemption tokens - The creator will want to allow the CAT's owners to melt the tokens into standard XCH, as long as they follow certain rules.")),(0,o.kt)("p",null,"In all of these cases, the TAIL program is run when a coin is spent to check if the issuance is valid."),(0,o.kt)("p",null,"We will cover the TAIL program in more detail later, but first let's cover what the CAT layer does."),(0,o.kt)("h2",{id:"design-choices"},"Design choices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"When a CAT is spent, any coins created automatically become CATs with the same TAIL")),(0,o.kt)("p",{parentName:"li"},"  When an inner puzzle returns a CREATE_COIN condition, the CAT layer will recognize this and change the condition to a CAT of the same type as itself."),(0,o.kt)("p",{parentName:"li"},"  For example, let's say the inner puzzle returns the following CREATE_COIN condition:\n",(0,o.kt)("inlineCode",{parentName:"p"},"(51 0xcafef00d amount)")),(0,o.kt)("p",{parentName:"li"},"  In this case, the CAT layer will calculate a puzzlehash for a CAT with the same TAIL as itself, and an inner puzzle of ",(0,o.kt)("inlineCode",{parentName:"p"},"0xcafef00d"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If a CAT does not use a TAIL, then a SpendBundle of CATs must not gain or lose any value")),(0,o.kt)("p",{parentName:"li"},"  In order to ensure that a CAT cannot be minted or retired without official authentication, all CATs that do not use a TAIL program ",(0,o.kt)("strong",{parentName:"p"},"MUST")," be a part of a spendbundle that outputs the same amount of value as its input.\nWe use a group accounting trick to guarantee this, which we will cover in more detail below.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"If a CAT is not approved by a TAIL program, then its parent must be a CAT of the same type")),(0,o.kt)("p",{parentName:"li"},"Another way we prevent CATs from being minted in unapproved methods is by ensuring that the tokens have a valid lineage. Commonly this is done by asserting that the CAT's parent was also a CAT of the same type."),(0,o.kt)("p",{parentName:"li"},"This is accomplished by passing in the coin's information, returning an ",(0,o.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_ID")," condition, and then passing in the parent information.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CATs enforce prefixes for Coin Announcements")),(0,o.kt)("p",{parentName:"li"},"In order to ensure that the CATs can communicate with each other without interference from an inner puzzle, they must prepend an appropriate coin announcement with the following rules:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the announcement comes from the CAT layer, it is prepended with ",(0,o.kt)("inlineCode",{parentName:"li"},"0xcb"),"."),(0,o.kt)("li",{parentName:"ul"},"If the announcement comes from the inner puzzle, it is prepended with ",(0,o.kt)("inlineCode",{parentName:"li"},"0xca"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CATs pass a list of pre-calculated Truths to the inner puzzle")),(0,o.kt)("p",{parentName:"li"},"Many inner puzzles require information such as their coin ID and puzzlehash. Luckily, we already calculate much of this information in the CAT layer, so we bundle it together as a pre-validated collection of ",(0,o.kt)("strong",{parentName:"p"},"Truths"),". We then pass these Truths into the inner puzzle as the first parameter in the solution."),(0,o.kt)("p",{parentName:"li"},"The Truths are:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"My ID - The ID of the coin"),(0,o.kt)("li",{parentName:"ul"},"My Parent's ID - The ID of the coin's parent"),(0,o.kt)("li",{parentName:"ul"},"My Full Puzzle Hash - The puzzlehash contained inside the coin"),(0,o.kt)("li",{parentName:"ul"},"My Amount - The value of the coin"),(0,o.kt)("li",{parentName:"ul"},"My Inner Puzzle Hash - The puzzlehash of the inner puzzle inside this coin's CAT layer"),(0,o.kt)("li",{parentName:"ul"},"My Lineage Proof - (optional) Proof that the CAT's parent is of the same type as the CAT"),(0,o.kt)("li",{parentName:"ul"},"My TAIL Solution - (optional) A list of parameters passed into the TAIL program"),(0,o.kt)("li",{parentName:"ul"},"My Coin Info"),(0,o.kt)("li",{parentName:"ul"},"CAT Mod Hash - The hash of the CAT before anything is curried"),(0,o.kt)("li",{parentName:"ul"},"CAT Mod Hash Hash - The hash of the CAT Mod Hash"),(0,o.kt)("li",{parentName:"ul"},"CAT TAIL Program Hash - The hash of the TAIL program that was curried into the CAT")))),(0,o.kt)("h2",{id:"spend-accounting"},"Spend Accounting"),(0,o.kt)("p",null,"Each CAT coin has a truthful calculation of the difference between its amount and its output amount, called its ",(0,o.kt)("strong",{parentName:"p"},"Delta"),"."),(0,o.kt)("p",null,"The CAT coins also are given the sum of every other coin's Deltas, which must be zero. In order to enforce this zero-Delta rule, each CAT coin is assigned a Next and Previous neighbor, which ultimately forms a ring."),(0,o.kt)("p",null,"The coins use Coin Announcements to communicate with their neighbors. For our use case, the announcements must contain two pieces of information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ID of the coin that created this coin. This is already implicitly contained in the Coin Announcement."),(0,o.kt)("li",{parentName:"ul"},"The intended recipient's coin ID. The announcement's message must contain this information in order to prevent attacks where coins can receive messages that weren't intended for them.")),(0,o.kt)("p",null,"To form the ring, every coin outputs the following conditions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(\n  (CREATE_COIN_ANNOUNCEMENT previous_coin_ID + sum_of_deltas_before_me)\n  (ASSERT_COIN_ANNOUNCEMENT sha256(next_coin_id + my_coin_id + sum_of_deltas_including_me))\n)\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," represents concatenation of bytes, and announcement assertions take the hash of the announcement creator's ID and message."),(0,o.kt)("p",null,"In order to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"next_coin_id"),", we wrap the next coin's inner puzzle with the current coin's CAT information. This guarantees that the next_coin_id is a CAT of the same type as the current coin."),(0,o.kt)("p",null,"Because both coins follow the same CAT module code, they must comply with the same set of truths. This, in turn, guarantees that the whole ring is telling the truth. As long as the ring is connected, the total Delta must be zero."),(0,o.kt)("h2",{id:"extra-delta"},"Extra Delta"),(0,o.kt)("p",null,"There are two exceptions to the aforementioned zero-Delta rule:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minting coins (creating CATs from XCH)"),(0,o.kt)("li",{parentName:"ul"},"Retiring coins (melting CATs to their original XCH form)")),(0,o.kt)("p",null,"To account for these cases, the TAIL program may approve a misreporting of a CAT coin's Delta by a specific amount, called the ",(0,o.kt)("strong",{parentName:"p"},"Extra Delta"),". This is one of the parameters passed to the TAIL program."),(0,o.kt)("p",null,"There are a few rules to ensure that extra coins are not minted or retired:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the Extra Delta is anything other than ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", the TAIL program is forced to run. It must evaluate whether to permit the Extra Delta, or fail with an ",(0,o.kt)("inlineCode",{parentName:"li"},"(x)")," call."),(0,o.kt)("li",{parentName:"ul"},"If the Extra Delta value in the solution does not cause the TAIL program to fail, then it is automatically added to the reported Delta, which is used in the announcement ring."),(0,o.kt)("li",{parentName:"ul"},"If the TAIL program is not revealed and the Extra Delta is not ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", then the puzzle will fail.")),(0,o.kt)("h2",{id:"the-token-and-asset-issuance-limiter-tail-program"},"The Token and Asset Issuance Limiter (TAIL) Program"),(0,o.kt)("p",null,"The TAIL program is powerful and flexible. It has control over, and access to, many things. This gives a programmer a lot of control, but also a great deal of responsibility."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning"),": If the TAIL is not programmed correctly,\nthen tokens may be minted by attackers,\nrendering the asset worthless.")),(0,o.kt)("p",null,"A TAIL should follow all of the conventional rules of security that any Chialisp program responsible for locking up money should follow."),(0,o.kt)("p",null,"Several parameters must be passed to a TAIL's solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Truths - These are bundled together, as explained above"),(0,o.kt)("li",{parentName:"ul"},"parent_is_cat - A flag indicating whether the parent has been validated as a CAT of the same type as this CAT"),(0,o.kt)("li",{parentName:"ul"},"lineage_proof - (optional) Proof that the parent is a CAT of the same type as this CAT"),(0,o.kt)("li",{parentName:"ul"},"delta - The Extra Delta value, as explained above"),(0,o.kt)("li",{parentName:"ul"},"inner_conditions - The conditions returned by the inner puzzle"),(0,o.kt)("li",{parentName:"ul"},"tail_solution - (optional) A list of opaque parameters")),(0,o.kt)("p",null,"Although the TAIL is powerful, it is ",(0,o.kt)("strong",{parentName:"p"},"not necessarily"),' run every time the coin is spent. The TAIL is run if a "magic" condition is created in the inner puzzle. This "magic" condition is required to prevent people who can spend the TAIL from intercepting the spend and changing it against the spender\'s will.'),(0,o.kt)("p",null,"The TAIL should check diligently for the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is the Extra Delta minting or retiring any coins, and if so, do I approve?"),(0,o.kt)("li",{parentName:"ul"},"If this coin's parent is not a CAT of the same type as me, do I approve?")),(0,o.kt)("h2",{id:"the-limits-of-a-tails-power"},"The limits of a TAIL's power"),(0,o.kt)("p",null,"In Ethereum, a token's issuer might have the ability to freeze or confiscate funds without the owner's permission. This is not possible in Chia. Let's explore why."),(0,o.kt)("p",null,"In Chia, an issuer creates a TAIL, which lives inside all CATs of the same type, including those that have already been distributed. However, the issuer does not have the power to spend coins they do not own. A TAIL can only run as the last step in a CAT's spend, and the owner of the CAT (and not the issuer) is responsible for providing its solution. This means that only the owner can run the TAIL. Therefore, the CAT's owner is the only one with the ability to complete the spend."),(0,o.kt)("p",null,"This decision adds some decentralization for users. It also adds some complexity. The importance of creating a well-constructed TAIL cannot be emphasized enough. Once you have distributed a CAT, it is no longer possible to change the TAIL across the entire token supply. The TAIL is locked into the same set of rules forever. To change the TAIL would be tantamount to replacing physical cash in circulation. You would have to offer an exchange for new tokens and eventually deprecate the old token, even if some people still carry it."),(0,o.kt)("p",null,"It also means that if the set of rules is compromised, people may be able to mint or retire CATs maliciously. There\u2019s no easy way to \u201cpatch\u201d the TAIL, other than through the process above, which is obviously best avoided."),(0,o.kt)("h2",{id:"tail-examples"},"TAIL Examples"),(0,o.kt)("p",null,"The CAT1 standard currently includes three example TAILs, though many more are possible."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/protocol_and_cats_rebased/chia/wallet/puzzles/genesis-by-coin-id-with-0.clvm",title:"Chialisp code for the One-Time Minting TAIL"},"One-Time Minting")),(0,o.kt)("p",{parentName:"li"},"The default way in which we currently issue CATs is with a TAIL that only allows coin creation from a specific coin ID. In Chia, coins can only be spent once, so this results in a one-time minting of a CAT. After the issuance, there will never be any more or less of the CAT, and no one will be able to run the same TAIL ever again.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/protocol_and_cats_rebased/chia/wallet/puzzles/everything_with_signature.clvm",title:"Chialisp code for the Everything With Signature TAIL"},"Everything With Signature")),(0,o.kt)("p",{parentName:"li"},"The polar opposite of the TAIL above is the ability of the creator to do whatever they want, as long as they provide a signature from their public key. This key is curried into the TAIL, which returns a single AGG_SIG_ME condition asking for a matching signature. If the creator can provide that signature, then the spend passes and any supply rules that were violated are ignored."),(0,o.kt)("p",{parentName:"li"},"Keep in mind that AGG_SIG_ME only allows the signature to work on a single coin. Therefore, the creator cannot release a signature for everyone to use; instead the creator must personally sign every TAIL execution.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/protocol_and_cats_rebased/chia/wallet/puzzles/delegated_genesis_checker.clvm",title:"Chialisp code for the Delegated TAIL"},"Delegated TAIL")),(0,o.kt)("p",{parentName:"li"},'This is the best balance of security and flexibility that we currently have. The Delegated TAIL is similar to the "Everything With Signature" example, except instead of requiring a signature from a specific coin, it requires a signature from a specific puzzlehash. When the puzzlehash has been signed, the creator may run that puzzle in place of the TAIL.'),(0,o.kt)("p",{parentName:"li"},"This TAIL allows the creator to create new TAILs that they can use with the CAT, even if those TAILs didn't exist during the initial issuance! For example, the creator could create:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A single minting"),(0,o.kt)("li",{parentName:"ul"},"A DID to mint new coins"),(0,o.kt)("li",{parentName:"ul"},"Anything else they want!")),(0,o.kt)("p",{parentName:"li"},"Note that we use AGG_SIG_UNSAFE in order to make this signature work for all coins. The creator can publish a valid signature, allowing any owner of the CAT to run the TAIL on their own. One scenario where this is useful is in redemption schemes -- you want to allow people to melt their CATs into XCH as long as they follow certain rules when they do so."),(0,o.kt)("p",{parentName:"li"},"There is another consideration to make when you are signing new Delegated TAILs. Once you sign it and publish the signature, it is out there forever. Be careful what permissions you grant because you can never take them back."))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The CAT1 standard is an exciting addition to Chia's ecosystem. It allows near-limitless functionality for issuing fungible tokens. We're excited to see what kind of creative ideas the Chia community comes up with!"))}c.isMDXComponent=!0}}]);