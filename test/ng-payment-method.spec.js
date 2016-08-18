describe('ng-payment-method', ()=> {

  const moduleName = 'paymentMethod'
  let app = null
    , $compile = null
    , $rootScope = null
    , $scope = null

  beforeEach(module(moduleName))

  beforeEach( ()=> {
    inject( (_$compile_, _$rootScope_)=> {
      $compile = _$compile_
      $rootScope = _$rootScope_
      $scope = _$rootScope_.$new()
    })
  })

  let compile = (html)=> {
    let element = $compile(html)($scope)
    $scope.$digest()
    return element
  }

  describe('module', ()=> {
    beforeEach( ()=> app = angular.module(moduleName) )

    it('is defined', ()=> expect(app).to.exist )
    it('does not have any dependency', ()=> expect(app.value('appName').requires).to.be.empty )
  })

})
