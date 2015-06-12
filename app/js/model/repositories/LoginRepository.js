Configuration(function(ContextRegister, RepositoryFactory) {	
	var LoginRepository = RepositoryFactory.factory('/LoginRepository', 'LOCAL');
	ContextRegister.register('LoginRepository', LoginRepository);
});