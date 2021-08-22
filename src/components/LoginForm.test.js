const rewire = require("rewire")
const LoginForm = rewire("./LoginForm")
const mapStateToProps = LoginForm.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ auth: {} })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ auth: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
