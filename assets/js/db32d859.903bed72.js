(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[6653],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,y=d["".concat(l,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(y,r(r({ref:t},c),{},{components:n})):o.createElement(y,r({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3741:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),r=["components"],s={id:"security",title:"8 - Security"},l={unversionedId:"security",id:"security",isDocsHomePage:!1,title:"8 - Security",description:"When writing Chialisp, security concerns should be at the front of your mind.",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/docs/security",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/security.md",version:"current",frontMatter:{id:"security",title:"8 - Security"},sidebar:"someSidebar",previous:{title:"7 - Lifecycle of a Coin",permalink:"/docs/coin_lifecycle"},next:{title:"9 - Debugging",permalink:"/docs/debugging"}},u=[{value:"Signing and Asserting Solution Truth",id:"signing-and-asserting-solution-truth",children:[]},{value:"Asserting Coin Information",id:"asserting-coin-information",children:[]},{value:"Replay Attacks",id:"replay-attacks",children:[]},{value:"The &quot;Flash Loan from God&quot; attack",id:"the-flash-loan-from-god-attack",children:[]},{value:"Puzzle and Solution Reveals",id:"puzzle-and-solution-reveals",children:[]},{value:"Password Locked Coin Security",id:"password-locked-coin-security",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When writing Chialisp, security concerns should be at the front of your mind.\nThe language is specifically designed to secure money on a network with ",(0,a.kt)("em",{parentName:"p"},"no centralized authority")," to enforce rules.\nThe only person standing in the way of attackers and potentially large sums of money is going to be you."),(0,a.kt)("h2",{id:"signing-and-asserting-solution-truth"},"Signing and Asserting Solution Truth"),(0,a.kt)("p",null,"Remember from ",(0,a.kt)("a",{parentName:"p",href:"/docs/coin_lifecycle"},"our discussion of coin lifecycles")," that when you push a transaction, it gets gossiped to other nodes until it finds one who will put it into a block.\nEvery node chooses what will be passed on to the next node. If it likes, it can change some data before it forwards it."),(0,a.kt)("p",null,"This is why the aggregated signature is part of the spend bundle.\nIt allows you to mark data as valid only if there is also a signature that vouches for its correctness.\nSignatures are how you prevent nodes from changing your transaction in malicious ways; if they do, the spend will no longer be valid."),(0,a.kt)("p",null,"Signing is especially important when looking at solution values.\nThe puzzle reveal is secured by the puzzle hash on the coin.\nThe solution, however, can be anything.\nMost of the time when you are spending a coin, a the output conditions are passed in somehow through the solution.\nIf you don't sign those conditions (or the delegated puzzle that generates them) you must assume that an attacker is going to notice and attempt to substitute their own values."),(0,a.kt)("p",null,"Sometimes, it is necessary to have solution values that logistically cannot be signed, but also should not be changed.\nIn scenarios like these, you should try to have a signed coin use announcements to assert that the coin is being spent with the correct information."),(0,a.kt)("h2",{id:"asserting-coin-information"},"Asserting Coin Information"),(0,a.kt)("p",null,"Signing is how you prevent nodes from messing with your own spends, but sometimes you want to create coins that will be traded around with specific rules.\nAs a result you don't know who will be spending the coin, and you don't know if they will be honest.\nWe saw in ",(0,a.kt)("a",{parentName:"p",href:"/docs/common_functions#outer-and-inner-puzzles"},"our discussion of outer puzzles")," that you can enforce rules on your child coins using currying and wrapping tree hashes, but there are times when you also want to enforce truths about yourself or your parent."),(0,a.kt)("p",null,"This is where the ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_*")," family of opcodes comes in.\nWhen you need information (",(0,a.kt)("inlineCode",{parentName:"p"},"parent_coin_info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"puzzle_hash"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"amount"),") about your coin to use in the puzzle, it cannot always be curried in by an honest party.\nSometimes, it will need to be passed in through the solution.\nThe solution should always be treated as if it is being solved by malicious or careless parties.\nIf any coin information is being passed in, it should be asserted with opcodes to ensure that the network, who can see that information, can confirm it."),(0,a.kt)("p",null,"Keep in mind that ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_COIN_ID")," will actually implicitly assert all three of the pieces of information in a coin. The same is true of ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_PARENT_ID")," for parent coins, which is particularly useful since there is no such thing as ",(0,a.kt)("inlineCode",{parentName:"p"},"ASSERT_MY_PARENT_PUZZLE_HASH"),", for example."),(0,a.kt)("h2",{id:"replay-attacks"},"Replay Attacks"),(0,a.kt)("p",null,"Another huge concern when creating your spends is whether they will be valid if parts of them are excluded or reused.\nThis kind of attack is the reason why ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG_UNSAFE")," is labeled the way it is."),(0,a.kt)("p",null,"If you sign something with ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG_UNSAFE"),", the only data that is being signed is the message you are trying to sign.\nOnce you sign and push it, that signature lives on the blockchain forever.\nIf you later create a puzzle that is locked up with the need for the same signature, an attacker can find the signature you used last time and reuse it.\nThis is why you should try to always use ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," if possible.\nNot only does it make you commit to the coin ID in the signature (something that is unique to every spend), but it also commits to the genesis challenge of the network you are on. A revealed signature for a coin on testnet could be replayed in mainnet otherwise."),(0,a.kt)("p",null,"Exclusion should also be a concern at the forefront of your mind.\nOftentimes, you will be spending multiple coins in the same bundle, and they should all be tied together into one aggregated signature.\nIf you have good reason not to sign one of them, make sure you know what happens if it gets excluded from the bundle.\nFurthermore, aggregated signatures can't be disaggregated into smaller signatures ",(0,a.kt)("em",{parentName:"p"},"unless")," you have previously signed one of the smaller combinations of public key-message pairs in the bundle. The attacker can exclude the rest of the transactions that contain ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG")," conditions and reuse the smaller signature again on the remaining transactions.\nThey can also calculate the remaining aggregated signature and perhaps sign every spend except the one the exclude. This is known as ",(0,a.kt)("strong",{parentName:"p"},"signature subtraction")," and is another great reason to use ",(0,a.kt)("inlineCode",{parentName:"p"},"AGG_SIG_ME")," as much as possible."),(0,a.kt)("h2",{id:"the-flash-loan-from-god-attack"},'The "Flash Loan from God" attack'),(0,a.kt)("p",null,"An interesting angle that also has to be considered during the building of your coins is how their security holds up if a party that is spending them has infinite money.\nThis may seem ridiculous except that cryptocurrency enables ",(0,a.kt)("strong",{parentName:"p"},"flash loans")," to exist which are instant loans of money with no conditions except that they are returned to the owner within the same block."),(0,a.kt)("p",null,"Take for example, a piggybank coin that only allows you to withdraw funds once the amount of the piggybank has grown to a determined savings goal.\nIf a person wants to retrieve their funds early, they can borrow money equal to their savings goal, cash out the piggybank, and then return the money that they borrowed."),(0,a.kt)("p",null,"There's also potential to use vast sums of borrowed money to influence the price of something, if that price is calculated programmatically.\nIf you have enough money, you can singularly simulate a bunch of trades to influence the price calculation to the price you desire, make a transaction at that price, and then return all of the money you borrowed to simulate trading while keeping the profits."),(0,a.kt)("p",null,"Fortunately, this attack has a relatively easy fix, and that is to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"(ASSERT_HEIGHT_RELATIVE 1)")," condition to prevent the money from being returned in the same block."),(0,a.kt)("h2",{id:"puzzle-and-solution-reveals"},"Puzzle and Solution Reveals"),(0,a.kt)("p",null,"Remember to think about when puzzles and solutions are revealed.\nThey are revealed only at spend time of the coin that is committed to them.\nThe only thing that the network sees prior to that is the parent coin and the puzzle hash.\nThis can be an advantage, since you can hide sensitive information for spending the coin inside the puzzle hash before it is ever revealed.\nHowever, once the puzzle is revealed, it's revealed forever, so that sensitive information cannot be considered sensitive again."),(0,a.kt)("p",null,"Also keep in mind that if a parent coin is currying information to its child coin before it creates it, that will be public before the child coin is spent.\nFor some wallets, this is an advantage since you may want certain data about a coin's puzzle to calculate whether or not it's yours.\nHowever, if you were trying to use a plain-text password, that won't be very secure.\nInstead, make sure to pre-commit to things with hashes and then assert that they are revealed correctly later."),(0,a.kt)("h2",{id:"password-locked-coin-security"},"Password Locked Coin Security"),(0,a.kt)("p",null,"It's worth noting that the ",(0,a.kt)("a",{parentName:"p",href:"/docs/common_functions#outer-and-inner-puzzles"},"password locked coin we've been building")," is actually not very secure.\nWhen you solve the puzzle, you have to reveal the password.\nSince any full nodes whom you give your spend to will now be able to see your password, they can change the solution and pay themselves all the money instead!"),(0,a.kt)("p",null,"In order to fix it, it's probably best to curry in a public key that also has to sign for the solution.\nThe new puzzle will be able to be spent only with a password ",(0,a.kt)("em",{parentName:"p"},"and")," only by the person who you have decided owns this coin. Of course, this is not particularly useful most of the time and is usually about as good as a signature locked coin with extra steps.\nSignatures are by far the most secure way to lock up your coins."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Hopefully you have a better idea of what risks are involved when creating a Chialisp puzzle.\nIt's very worth your time to try and exploit your puzzles by passing in dangerous solutions or leaving out transactions/signatures.\nYou're not just trying to protect against bad actors, but also against people accidentally bricking their coins.\nPuzzles are usually pretty permanent, so it's worth the extra time."))}h.isMDXComponent=!0}}]);