'use strict';
let icons={
    star:'data:image/png;base64,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',
    starActive:'data:image/png;base64,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',
    board:'data:image/png;base64,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',
    boardActive:'data:image/png;base64,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',
    search:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAMz0lEQVR4Xu2ddaxtRxWHv+JS3IoWdw1W3J0gpWigSIDiXtwLFCjuBC8avGhwbyhuxYJbgeDukI+3b97lcc85a2bLzD5nVnL/uDlrz8ya+e3Zs3T2otFGz8BeGy19E54GgA0HQQNAA8CGz8CGiz+3HeCMwLmAswJnAE4NnBw4AXAc4J/AX4E/AL8Efgp8H/g28K3u9w1f8v8Vv2YAnBi4InB54DLARYFT9Fg9gfFV4CjgE8CHgB/3aG8tHq0NAKcFDgD2B64AHG/kWf4y8Dbg9cCXRu6ryuZrAMCxgesBBwHXAvy/BH0FeDFwOPDrEgMo0WdJAJwIuBNwn+6bXkL+nfr8I/Ay4KnA92oZ1FjjKAGA4wN3BR4CuOXXSn/vgHAI8KNaB9l3XFMD4MbAU4Cz9x34hM//CTgMeBLw5wn7naSrqQBwJuD5wPUnkWqcTlQl7wx8cJzmy7Q6BQBuDTwXOGkZEQfvVVkOXpfdYEwAeMh7ISAA1o20J9wE+PrcBRsLAGcDjgAuNPcJWjL+3wO3Bd4yZxnHAMB+nXHlNANPjOrZp4HPA0cD3+kseb8A/M1TuzaEE3YWw9N36uV5gYsAjmufgcf0b+CB3cF24KanaW5oAGjI8Y1wEYYgt9g3Ae8CPgX8o0ejynoO4NrAjYCrAMfq0d72R58O3G+gtiZtZkgA3AB4wwDmW99mrXFa5XzbfcvGIHeDA4G7AH6y+pLnHe0bY4237/h2fH4oAPjma1PvY7vX/Kr17XkTm2L9bOh7eMQAZ5ZnAfceZaVGanQIAFy686zlbvt/A54BPAH47UhyRpr1c3Ar4ImAbudcehTw2NyHp36uLwDcOj/Zw6SrW/aOlalTewOPB+4J2SFzflpeOfVi5vTXBwDq+S5+jqrnYe5h3ZZvEEeNdOVuEbVippKxB8YxfCb1wan5+wBAhOcYeY7pfP5HTi1sRn+qsq8Frpbx7A+AiwG/ynh2skdyAeDC52xxBl3o+5+Td81Qs+d08QqpC/PmzmKY+txk/DkAcEvUEJNq2/d77+KXPOjlTqzz9GjgkRkNaC1Ura2ScgDw9gyvnouvAcZgzTmTAHhMogB+As4H/DzxuUnYUwGgP99tLYXc9g3unOObv6eczpe2ivumTEC3A7gTVEcpADCS52uJVjMPfJea2Td/1SJpL9A8rTk5SloH9UVozq6KUgBg7J427yip6l0JmMNpPyrTFp/nHxfzPAkPfgRQtayKogBQ59f7drqE0T+4C6NKeGRWrHoYBUGK+fsawPtrkjIKAO3bmmuj5KHPt79WI09UjlV8uoKNFYzShzsvZJR/dL4IAHSWmFZlOlaEtO37dsw+WiYgrDYCdwENPlG6BPDZKPPYfBEA6OY1uidKTwYeFGVeAz5Nvh9LkOPlwO0T+EdljQDgncB1g6PQpauDaB1UvqDI/2VTNVZFjpBh5ia2VjFHqwBg4sZPEtK1Ht550iITsU48OsRScgv1gL6khglYBYC7dSHdkbEayXPmiYM5IuOaiucdnak70t/7gGtGGMfmWQUAVZaoJ8zEDwGzqaSK996g8GpH1jb4TZB/NLZlADA/Xzt2VM+9OPC50UZaf8NaCM0eimpLN+tiKItKtgwA1+micSMDVOU7/9wCIiOCJfIcCmgAi9CLulSzCO9oPMsAYFjUQ4M9y+sBcNPJXTAaBaRfxZemKC0DgEmQxs5H6HJravOPyL6dx8+AWlPEZK6D6FSlD83LAOD3P1KTx9O/hZr6JG2kTnTN/K8Dbh4coM4hnUTFaBEADIuOhm1VZ98uNpu7Ojaa2PyACMlruFkxWgQAkWkVrQjNNi0qIlwGj8WtPhp87pldiZwg+/BsiwBwu648SqTHaqxakcFOwHPKrkZhpCuzqW4YYRyLZxEAPP17so/QVRN2i0h768CjgedkAUH0CuodLEaLAPC0hLg3o2K+WUyCOju25NwFAkOzCtkQiamBrnZmWQSAlya4LFVlqk5+yJ6d/Ac9GBsQs4r0CKpBFaNFAHgNcMvgqKzTaypUo90zEHWh/2XAWgpZ878IAJZOvWmwRSOG/hXk3RQ2i2REooY1Bg1VpCJrbhcBwHy4WwRb1FlkeZZGu2cgmjyj8ey4JSduEQAMW4omMnja/V1JISrsW3//1QPjMlPqJAG+0VgWAUDr1N2Dver+tCZ/o90zoFs8Eiiq36BPMYrec74IAOa/RRMhreVvnYBGu2fAhbVK2SpSXcypr7Cq3fDviwBgsSNr9URIbUEHSKNdM6BWFK0pXDw0bBEAjAJWlYmQu4Wp0412zYA5EV8IToaBoZrSi9EiAGjdiyZ2vDUhJLqYoBN2fJuEegCa3I0iKkaLAGDGiydUM4JXkRczGec+q/p4q4Tq8bufTj+hEdIRpEOoGC0LCImeZB28N3mZPtYIon4A52pfwFpCxWgZAAzztopmhIoHNkQGOQGP5XN+GOzHnTOiKQSby2NbBoCUQlAfCBo+8kY5n6fuATw7ONwqCkgtA0BKWJi+APlF9SbTxwEDZCMkWLx8oiitygwy3y1qqDAj2MzgTaVzA99IEN7K5RbdKEqrAPC4rqJnZJDf7Q6D614UYtFcWEAjWijaG0ciASORee/FswoAFwa+mNBDFelOCeMditU4QE/zptNFqJqC0qsAoDBer3rBiFQdr3f8blp8QEoWlfYS1WbzCItTBACp9YG0hL2quGTTDUAjmDGR0be/qjyKCADMDlK3jQrojdze0zP3qqBRCL2iu3kkyl/VZzICAAVTt1VtidLsbs6ICrYHn7UTUsq+GQXs9l9NGl0UAAZ9uM1Fw5f8zpkv4Ha3rmQklAdkzblRqkL33z7YKAB8xkuRvDo1SuYWGhXjtW7rRs6bcZPRJFDl9zPq219VBHUKALRza+iwamiUNBFbJbyaLS868BV8qWVzbe4OCel2Aw1zdTMpALA1Az/UYVPoBV3toHVxF3vngS7clHBur78zBaw69TgVAN4Mpl1AM2YKeYtWKnBS2p+K16KQ70ncBV30ywJHTTXIlH5SAWDbqSffrfEIgENmHDiik8cbTFNvStHhk6JBpaxfb94cANhpStj49kFaS+ABNW6FK2bSbd9sqZTzj02aMHOWmr2kuQDwU2AxpJwiR8YQmnQyh2QS50dLqLeEpHzzt+NJF7EV16o0jOUCQAG19lkpOyezRW1CFSrF0dR7u0tsQD1f1TdF1VvURbUg6AMAhbVAsten5LRjWXnv67UWQW1qouccL6+OFn2MYKtKEOQs3J7CHtwzEEQV6V6AE1SadOx4d7AOrTGoOhAMAQAnKqWiyKKJNaVaTUE1c2rSn3//7nsfdXrljrEqEAwFACdDg89BubOy7TkzkqyepRVxbMOJYVwWuDY7Z+yFr/JgOCQAbMuwKLfzIUjPmTmHbwT8TAwFBk3aFm+w/kE0gHMIefZso4qdYEgAbAmYc7vmqgn+WedZ9DIq8+5MvvB2klVkoqZpboa2mcXsBZZVxOJ1Ay8OgjEAoGweoqyGHUktW7WIi363wJIeR72NlqtVqzClzUW3cNU+NSReBIQrCoKxAKDcl+y2by1hjZbPQDEQjAkARfZ07U6w/xohQPNuNDAmRewiIBgbAFsTcGB37ayAmCt5CNWxYwSwB1M9g0PT5CCYCgBOlDeQHdadD6bsd4hFMlNadXHLpbs38O51AEGJhfA2cVPIIpU0h1i8Pm2Y7KFx6vAd1NC1AEEJAGwtiGXUvGamRiBog3C3soTLshi+2YOgJAC2gOA9OwZMGC+f6m/v83bv+awha97e4Xdes3Q0x3HWIKgBAFsLofv1gM79aki5JWinoKO7YI9X90jXmi0IagLA9sW2grYXMfrnadvYg6HGag2DIwEvxfIgN1SK9ixBMNSkjv2mmp6mOddaBefsauxbkEKLn79pcfTPbdsK3EYbWcL+mC5r10RM33TNyGPW5JkdCOYCgLEBNmT7swJBA8CQS7+7rdmAoAFgHADY6ixA0AAwHgBmAYIGgHEBUD0IGgDGB0DVIGgAmAYA1YKgAWA6AFQJggaAaQFQHQgaAKYHQFUgaAAoA4BqQNAAUA4AVYCgAaAsAIqDoAGgPACKgqABoA4AjA2CIxbdZdwAUA8AxgSBcRGmvv8fNQDUBYCxQGBIu3dANQDUt947jmhIV7JFLU2335HaDlAvIoYAwdLFV/QGgHoB0PdzYHUzq7YvpQaAVTNU/vecnSC0+G0HKL+40RGkgMAKLdG7C9snILoCFfBFQJC0+G0HqGBVE4ewDATJi98AkDj7lbDvBILsu5vbIbCSVU0chiAwl3E/wKJclrTNogaArGlbn4caANZnLbMkaQDImrb1eagBYH3WMkuSBoCsaVufhxoA1mctsyT5D4u3JJ+RplxYAAAAAElFTkSuQmCC'
}
export default icons;