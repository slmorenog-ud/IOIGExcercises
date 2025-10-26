flowchart LR
N1(("1|0|0")) -- A (1) --> N2(("2|1|1"))
N1 -- B (2) --> N3(("3|2|10"))
N2 -- C (1) --> N4(("4|2|2"))
N4 -- D (2) --> N5(("5|4|4"))
N3 -.->|s1| N6(("6|2|12"))
N4 -.->|s2| N6
N6 -- E (6) --> N7(("7|8|18"))
N5 -- F (10) --> N8(("8|14|14"))
N8 -- G (3) --> N9(("9|17|17"))
N9 -- H (1) --> N10(("10|18|18"))
N8 -- I (1) --> N11(("11|15|36"))
N7 -.->|s3| N12(("12|18|18"))
N10 -.->|s4| N12
N12 -- J (5) --> N13(("13|23|23"))
N11 -- K (2) --> N14(("14|17|36"))
N8 -.->|s5| N15(("15|23|23"))
N13 -.->|s6| N15
N15 -- L (1) --> N16(("16|24|24"))
N8 -- M (2) --> N17(("17|16|22"))
N16 -.->|s7| N18(("18|24|24"))
N17 -.->|s8| N18
N18 -- N (4) --> N19(("19|28|28"))
N9 -.->|s9| N20(("20|23|27"))
N13 -.->|s10| N20
N20 -- O (2) --> N21(("21|25|29"))
N21 -- P (2) --> N22(("22|27|31"))
N11 -.->|s11| N23(("23|27|37"))
N22 -.->|s12| N23
N23 -- Q (1) --> N24(("24|28|37"))
N22 -- R (7) --> N25(("25|34|31"))
N11 -.->|s13| N26(("26|28|28"))
N19 -.->|s14| N26
N26 -- S (7) --> N27(("27|35|35"))
N27 -- T (3) --> N28(("28|38|35"))

%% Punto final único (recibe las actividades finales K, Q, R, T)
N14 -- End (0) --> N29(("29|38|38"))
N24 -- End (0) --> N29
N25 -- End (0) --> N29
N28 -- End (0) --> N29

%% Ruta crítica resaltada
linkStyle 0 stroke:#ff0000,stroke-width:4px,fill:none  %% A
linkStyle 2 stroke:#ff0000,stroke-width:4px,fill:none  %% C
linkStyle 3 stroke:#ff0000,stroke-width:4px,fill:none  %% D
linkStyle 7 stroke:#ff0000,stroke-width:4px,fill:none  %% F
linkStyle 8 stroke:#ff0000,stroke-width:4px,fill:none  %% G
linkStyle 9 stroke:#ff0000,stroke-width:4px,fill:none  %% H
linkStyle 13 stroke:#ff0000,stroke-width:4px,fill:none %% J
linkStyle 17 stroke:#ff0000,stroke-width:4px,fill:none %% L
linkStyle 21 stroke:#ff0000,stroke-width:4px,fill:none %% N
linkStyle 32 stroke:#ff0000,stroke-width:4px,fill:none %% S
linkStyle 33 stroke:#ff0000,stroke-width:4px,fill:none %% T