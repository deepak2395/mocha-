var JSDOM = require("jsdom")
var jQueryWindow = new JSDOM.JSDOM().window
var document = jQueryWindow.document;
var $ = require("jquery")(jQueryWindow);
var mlog = require("mocha-logger").mlog
/* import mlog from 'mocha-logger'; */
let chai = require('chai');
let chaiHttp = require('chai-http');
var assert = chai.assert
var expect = chai.expect
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server');
//Our parent block
 describe('API Testing', () => {
    describe('/GET API', () => {
        it('it should GET all the podcast', (done) => {
            chai.request('https://reqres.in')
                .get('/api/products')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.data.length).should.be.eql(3);
                    done();
                });
        });
    });

    describe('iauthor', () => {
        it('get API', (done) => {
            chai.request('https://iauthor-dev.azurewebsites.net')
                .get('/api/conversion')
                .end((err, res) => {
                    (res).should.have.status(200);
                    // (res.body).should.be.a('object');
                    // (res.body).should.be.eql(1);
                    done();
                });
        });

        it('post API', (done) => {
            var conversionObj = {
                conversion_type: "journal",
                conversion_method: "forward",
                DOMContent: "",
                metaData: "",
                comment: "",
                equation: "",
                configuration: {
                    "resourcepath": "google.com",
                    "blobDomain": "/search",
                    "customer_dtd": "tandf"
                },
            };
            chai.request('https://iauthor-dev.azurewebsites.net')
                .post('/api/conversion')
                .send(conversionObj)
                .then(function (res) {
                    (res).should.have.status(200);
                    (res.body.is_success).should.be.eql(true)
                    done()
                })
        });
    });

    describe('/GET message', () => {
        it('it should GET a message', (done) => {
            chai.request(server)
                .get('/message')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    done();
                });
        });
    });
}); 



/* 
describe('Track Testing Suite', () => {
    var trackcount = 0;
    var HTMLContent = $('<div class="StylePara" contenteditable="true" black-placeholder="Paragraph" element-type="Paragraph" icoretag="para" aid="5ais0x63y8v4712" ia_version="1" urid="4ee9f3ff9649"><div class="SectionTitle" element-type="abstract" contenteditable="false" icoretag="ititle" aid="605x84i2sa31v7y" ia_version="0">Abstract—</div> Thailand achieved full population coverage of fina<change class="del iAUser-1" data-cid="6" data-userid="1" data-username="is4800" data-time="1562220526370" id="037x254isyv8a61" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">ncial protection for healthcare i</change>n 2002 with successful implementation of the Universal Coverage Scheme (UCS). The three public health ins<change class="del iAUser-1" data-cid="7" data-userid="1" data-username="is4800" data-time="1562220528978" id="a60s45x1v7y8i23" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">urance schemes covered 98</change>.5% of the population by 2015. Current evidence shows a high level of service coverage and f<change class="del iAUser-1" data-cid="2" data-userid="1" data-username="is4800" data-time="1562220512597" id="80ay1647s3i52vx" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">inancial risk protection </change>and low level of unmet healthcare need, but the path toward UHC was not straightforward. Applying the Political Economy of UHC Reform Framework and the concept of path dependency, this study reviews how these factors influenced the evolution of the UHC refor<change class="del iAUser-1" data-cid="4" data-userid="1" data-username="is4800" data-time="1562220518172" id="6s210a54xi37vy8" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">m in Thailand. We highlight how p</change>ath dependency both set the groundwork for future insurance expansion and contributed to the persistence of a fragmented insurance pool even as the reform team was able to overcome certain path inefficient institutions and adopt more evidence-based payment schemes in the UCS. We then hig<change class="del iAUser-1" data-cid="3" data-userid="1" data-username="is4800" data-time="1562220514571" id="0xs6i7yv83a1254" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">hlight two critical political ec</change>onomy challenges that can hamper reform, if not managed well, regarding the budgeting processes, which minimized the discretionary power previously exerted by Bureau of Budget, and the purchaser-provider split that created long term tensions between the Ministry of Public Health and the<change class="del iAUser-1" data-cid="5" data-userid="1" data-username="is4800" data-time="1562220522587" id="3872aixsvy14506" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am"> National Health Security Office. Tho</change>ugh resisted, these two changes were key to generating adequate resources to, and good governance of, the UCS. We conclude that although path dependence played a significant role in exerting pressure to resist change, the reform team’s capacity to generate and effectively utilize evidence to guide policy decision-making process enabled the reform to be placed on a “good path” that overcame opposition.</div>')
    beforeEach(function () {
        trackcount = 0
        HTMLContent = $('<div class="StylePara" contenteditable="true" black-placeholder="Paragraph" element-type="Paragraph" icoretag="para" aid="5ais0x63y8v4712" ia_version="1" urid="4ee9f3ff9649"><div class="SectionTitle" element-type="abstract" contenteditable="false" icoretag="ititle" aid="605x84i2sa31v7y" ia_version="0">Abstract—</div> Thailand achieved full population coverage of fina<change class="del iAUser-1" data-cid="6" data-userid="1" data-username="is4800" data-time="1562220526370" id="037x254isyv8a61" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">ncial protection for healthcare i</change>n 2002 with successful implementation of the Universal Coverage Scheme (UCS). The three public health ins<change class="del iAUser-1" data-cid="7" data-userid="1" data-username="is4800" data-time="1562220528978" id="a60s45x1v7y8i23" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">urance schemes covered 98</change>.5% of the population by 2015. Current evidence shows a high level of service coverage and f<change class="del iAUser-1" data-cid="2" data-userid="1" data-username="is4800" data-time="1562220512597" id="80ay1647s3i52vx" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">inancial risk protection </change>and low level of unmet healthcare need, but the path toward UHC was not straightforward. Applying the Political Economy of UHC Reform Framework and the concept of path dependency, this study reviews how these factors influenced the evolution of the UHC refor<change class="del iAUser-1" data-cid="4" data-userid="1" data-username="is4800" data-time="1562220518172" id="6s210a54xi37vy8" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">m in Thailand. We highlight how p</change>ath dependency both set the groundwork for future insurance expansion and contributed to the persistence of a fragmented insurance pool even as the reform team was able to overcome certain path inefficient institutions and adopt more evidence-based payment schemes in the UCS. We then hig<change class="del iAUser-1" data-cid="3" data-userid="1" data-username="is4800" data-time="1562220514571" id="0xs6i7yv83a1254" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am">hlight two critical political ec</change>onomy challenges that can hamper reform, if not managed well, regarding the budgeting processes, which minimized the discretionary power previously exerted by Bureau of Budget, and the purchaser-provider split that created long term tensions between the Ministry of Public Health and the<change class="del iAUser-1" data-cid="5" data-userid="1" data-username="is4800" data-time="1562220522587" id="3872aixsvy14506" user_name="is4800" title=" Deleted by is4800 - 07/4/2019 11:38 am"> National Health Security Office. Tho</change>ugh resisted, these two changes were key to generating adequate resources to, and good governance of, the UCS. We conclude that although path dependence played a significant role in exerting pressure to resist change, the reform team’s capacity to generate and effectively utilize evidence to guide policy decision-making process enabled the reform to be placed on a “good path” that overcame opposition.</div>')
    });
    describe('Accept First Track', () => {
        it('it should GET N-1 track count', (done) => {
            $(HTMLContent).find('change').first().contents().unwrap()
            trackcount = $(HTMLContent).find('change').length
            expect(trackcount).to.equal(6);
            done();
        });
    });

    describe('beforeEach Demo', () => {
        it('BeforeEach ouput check', (done) => {
            trackcount = $(HTMLContent).find('change').length
            expect(trackcount).to.equal(6);
            done();
        })
    })

    describe('Accept All Track', () => {
        it('it should GET 0 track count', (done) => {
            $(HTMLContent).find('change').each(function () {
                $(this).remove()
            })
            trackcount = $(HTMLContent).find('change').length
            expect(trackcount).to.equal(1);
            done();
        });
    });
}) */


/* describe('Track Testing Suite', () => {
    var a = 10;
    beforeEach(function () {
         ++a
         
    });
    describe('Accept First Track', () => {
        it('it should GET N-1 track count', (done) => {
            expect(a).to.equal(11);
            done();
        });
    });

    describe('Accept All Track', () => {
        it('it should GET 0 track count', (done) => {
            expect(a).to.equal(13);
            done();
        });
    });
})  */